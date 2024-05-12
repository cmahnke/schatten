import {animate, scroll, inView} from "motion"
import Color from 'color'
import SweetScroll from 'sweet-scroll';

//TODO: get this from CSS
const bgColor = new Color('#000000');
const maxShade = 20;
const colorSteps = 255 / 100 * maxShade;

function generateURLFragment(col, row, fragment) {
  if (fragment === undefined) {
    window.location.hash = `${col}/${row}`;
  } else {
    window.location.hash = `${col}/${row}/${fragment}`;
  }
}

function toggleNav(elem) {
  var directions = ['left', 'right', 'up', 'down'];
  for (const direction of directions) {
    if (direction in elem.dataset) {
      document.querySelectorAll(`nav.stack-switcher .${direction}`).forEach((arrow) => {
        arrow.classList.remove('hidden');
        arrow.addEventListener('click', () => {
          const targetId = elem.dataset[direction];
          console.log(`Scrolling to ${targetId}`);
          const target = document.getElementById(targetId);
          target.scrollIntoView({behavior: 'smooth'});
        });
      });
    } else {
      document.querySelectorAll(`nav.stack-switcher .${direction}`).forEach((arrow) => {
        arrow.classList.add('hidden');
      });
    }
  }
}

function generatedCallback(elem) {
  if ('jump' in elem.dataset) {
    const targetId = elem.dataset['jump'];
    const target = document.getElementById(targetId);
    /* TODO: Check why this doesn't always work */
    target.scrollIntoView({behavior: 'smooth'});
    console.log(`Jumping to ${targetId}`);
  }
}

function handleCardIntersect(entries, observer) {
  // See https://github.com/Qix-/color/issues/53#issuecomment-656590710
  function lightenBy(color, amount) {
    const lightness = color.lightness();
    return color.lightness(lightness + amount);
  }

  entries.forEach((entry) => {
    var shade = (1 - entry.intersectionRatio) * 100;

    /* TODO: smoothen color scale  */
    if (shade > maxShade) {
      shade = maxShade;
    }

    const bg = lightenBy(bgColor, shade);
    /* console.log(`Colors: ${bgColor} => ${shade} => ${bg}, Intersection: ${entry.intersectionRatio}`); */
    if (!entry.target.classList.contains('__inserted')) {
      entry.target.style.backgroundColor = bg;
    }
    if (entry.intersectionRatio == 1) {
      entry.target.classList.add('active');
      generateURLFragment(entry.target.dataset.col, entry.target.dataset.row);
      toggleNav(entry.target);
      if (entry.target.classList.contains('__inserted')) {
        generatedCallback(entry.target);
      }

    /* Check if we really need the previous ones */
    } else if (entry.intersectionRatio < 1 && entry.target.classList.contains('active')) {
      entry.target.classList.remove('active');
      entry.target.classList.add('previous');
    } else if (entry.target.classList.contains('previous')) {
      entry.target.classList.remove('previous');
    }
  });
}

function buildThresholdList(numSteps) {
  let thresholds = [];
  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }
  thresholds.push(0);
  return thresholds;
}

function setupGrid(root, columnSelector, cardSelector) {
  var startSelector = document.querySelector(root);
  var maxHeight = 0;
  var maxWidth = 0;
  var grid = [];
  startSelector.querySelectorAll(columnSelector).forEach((column) => {
    var cards = column.querySelectorAll(cardSelector);
    var numCards = cards.length;
    maxWidth++;
    if (numCards > maxHeight) {
      maxHeight = numCards;
    }
    grid[maxWidth - 1] = numCards;
    column.dataset.col = maxWidth;
    if (!column.hasAttribute('id')) {
      column.setAttribute('id', `${maxWidth}`)
    }
    for (var i = 0; i < cards.length; i++) {
      cards[i].dataset.row = i + 1;
      cards[i].dataset.col = maxWidth;
      if (!cards[i].hasAttribute('id')) {
        cards[i].setAttribute('id', `${maxWidth}/${i + 1}`)
      }
    }
  });

  //Make the grid even
  for (var i = 0; i < grid.length; i++) {
    var column = startSelector.querySelectorAll(columnSelector)[i];
    if (grid[i] < maxHeight) {
      /* TODO: Make this work for more then one missing card using a loop */
      console.log(`Inserting at ${i}, after ${grid[i]}`);
      var newCard = document.createElement(cardSelector);
      newCard.classList.add('__inserted');
      newCard.dataset.row = maxHeight;
      newCard.dataset.col = i;

      newCard.setAttribute('id', `${i + 1}/${maxHeight}`)
      var next;
      if (grid.length > i) {
        next = `${i + 1}/1`
      } else {
        next = '1/1';
      }
      newCard.dataset.jump = next;
      newCard.dataset.down = next;
      newCard.dataset.right = next;

      column.appendChild(newCard);
    }
    //Add navigation links
    var cards = column.querySelectorAll(cardSelector);
    for (var j = 0; j < cards.length; j++) {
      if (cards[j].classList.contains('__inserted')) {
        continue;
      }
      if (j > 0) {
        cards[j].dataset.up = `${i + 1}/${j}`;
      }
      if (j + 1 < cards.length) {
        cards[j].dataset.down = `${i + 1}/${j + 2}`;
      }
      if (i + 1 < maxWidth) {
        cards[j].dataset.right = `${i + 2}/${j + 1}`;
      }
      if (i > 0) {
        cards[j].dataset.left = `${i}/${j + 1}`;
      }
    }
  }

  startSelector.querySelectorAll(columnSelector).forEach((column) => {
    var cards = column.querySelectorAll(cardSelector);

  });
}

function setupNav(selector) {
  if (selector === undefined) {
    selector = 'nav.stack-switcher .left, nav.stack-switcher .right, nav.stack-switcher .up, nav.stack-switcher .down';
  }
  document.querySelectorAll(selector).forEach((arrow) => {
    arrow.classList.add('hidden');
    //arrow.style.display = 'none';
  });
}

document.addEventListener("DOMContentLoaded", function() {

  setupGrid('.cards', '.stack', 'section');
  let observer = new IntersectionObserver(handleCardIntersect, {root: null, rootMargin: "0px", threshold: buildThresholdList(colorSteps)});
  setupNav();
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
  if (window.location.hash !== '') {
    console.log(`Moving to ${window.location.hash}`)
  }


});
