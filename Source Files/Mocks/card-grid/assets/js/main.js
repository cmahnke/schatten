import {animate, scroll, inView} from 'motion';
import Color from 'color';
//import SweetScroll from 'sweet-scroll';
import { marked } from 'marked';

const bgColor = new Color(getComputedStyle(document.body).getPropertyValue('--background-color'));
const maxShade = 20; // In percent
const colorSteps = 255 / 100 * maxShade;
const lang = 'de';
const directions = ['left', 'right', 'up', 'down'];

function generateURLFragment(col, row, fragment) {
  var id;
  if (fragment === undefined) {
     id = `${col}/${row}`;
  } else {
    id = `${col}/${row}/${fragment}`;
  }
  const target = document.getElementById(id);
  if (target !== null && 'slug' in target.dataset) {
    id = target.dataset['slug'];
  }
  window.location.hash = id
}

function toggleNav(elem) {

  for (const direction of directions) {
    if (direction in elem.dataset) {
      const clickHandler = () => {
        const targetId = elem.dataset[direction];
        console.log(`Scrolling to ${targetId}`);
        const target = document.getElementById(targetId);
        target.scrollIntoView({behavior: 'smooth'});
      }
      document.querySelectorAll(`nav.stack-switcher .${direction}`).forEach((arrow) => {
        arrow.classList.remove('hidden');
        arrow.onclick = clickHandler;
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
    var shade = (1 - entry.intersectionRatio) * 100 * (maxShade / 100);
    const bg = lightenBy(bgColor, shade);
    /* console.log(`Colors: ${bgColor} => Shade ${shade} => ${bg}, Intersection: ${entry.intersectionRatio}`); */
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

    /* TODO: Check if we really need the previous ones */
    } else if (entry.intersectionRatio < 1 && entry.target.classList.contains('active')) {
      entry.target.classList.remove('active');
      entry.target.classList.add('previous');
    } else if (entry.target.classList.contains('previous')) {
      entry.target.classList.remove('previous');
    }
  });
}

function findTarget(target) {
  var targetElem = document.getElementById(target);
  if (targetElem == null) {
    targetElem = document.querySelector(`*[data-slug='${target}']`);
  }
  return targetElem;
}

function menuLinkHandler(e) {
  var target = e.target.href.split('#')[1]
  var targetElem = findTarget(target);
  e.preventDefault();
  //TODO: Close menu
  targetElem.scrollIntoView();
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
  var maxCards = 0;
  var maxWidth = 0;
  var grid = [];
  startSelector.querySelectorAll(columnSelector).forEach((column) => {
    var cards = column.querySelectorAll(cardSelector);
    var numCards = cards.length;
    var height = column.getBoundingClientRect().height;
    maxWidth++;
    if (numCards > maxCards) {
      maxCards = numCards;
    }
    if (height > maxHeight) {
      maxHeight = height;
    }
    grid[maxWidth - 1] = {cards: numCards, height: height};
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

  //Check for height differences
  for (var i = 0; i < grid.length; i++) {
    if (grid[i].height < maxHeight) {
      console.log(`column ${i +1 } has wrong height, is {grid[i].height}, maximum is ${maxHeight}`);
    }
  }

  //Make the grid even
  for (var i = 0; i < grid.length; i++) {
    var column = startSelector.querySelectorAll(columnSelector)[i];
    if (grid[i].cards < maxCards) {
      /* TODO: Make this work for more then one missing card using a loop */
      console.log(`Inserting at ${i}, after ${grid[i]}`);
      var newCard = document.createElement(cardSelector);
      newCard.classList.add('__inserted');
      newCard.classList.add('card');
      newCard.dataset.row = maxCards;
      newCard.dataset.col = i;

      newCard.setAttribute('id', `${i + 1}/${maxCards}`)
      var next;
      if (grid.length > i) {
        next = `${i + 2}/1`
      } else {
        next = '1/1';
      }
      newCard.dataset.jump = next;
      newCard.dataset.down = next;
      newCard.dataset.right = next;

      column.appendChild(newCard);
    }
    //Add navigation links
    function lookArround(id) {
      const next = document.getElementById(id)
      if (next.classList.contains('__inserted')) {
        return false;
      }
      return true;
    }

    var cards = column.querySelectorAll(cardSelector);
    for (var j = 0; j < cards.length; j++) {
      if (cards[j].classList.contains('__inserted')) {
        continue;
      }
      if (j > 0) {
        const nextId = `${i + 1}/${j}`
        cards[j].dataset.up = nextId;
      }
      if (j + 1 < cards.length) {
        const nextId = `${i + 1}/${j + 2}`;
        if (lookArround(nextId)) {
          cards[j].dataset.down = nextId;
        }
      }
      if (i + 1 < maxWidth) {
        const nextId = `${i + 2}/${j + 1}`;
        if (lookArround(nextId)) {
          cards[j].dataset.right = nextId;
        }
      }
      if (i > 0) {
        const nextId = `${i}/${j + 1}`;
        if (lookArround(nextId)) {
          cards[j].dataset.left = nextId;
        }
      }
    }
  }

  /*
  startSelector.querySelectorAll(columnSelector).forEach((column) => {
    var cards = column.querySelectorAll(cardSelector);

  });
  */
}

function setupNav(selector) {
  if (selector === undefined) {
    for (const direction of directions) {
      selector += `nav.stack-switcher .${direction},`
    }
    selector = selector.substring(0, selector.length - 1);
  }
  document.querySelectorAll(selector).forEach((arrow) => {
    arrow.classList.add('hidden');
  });
  //TODO: This doen't always work
  document.addEventListener('scroll', () => {
    document.querySelectorAll(selector).forEach((arrow) => {
      arrow.classList.add('hidden');
    });
  });
}

// TODO: Remove for production
function parseMarkdown() {
  document.querySelectorAll('*[data-markdown]').forEach((text) => {
    var content = text.innerText || text.textContent;
    var parsed = marked.parse(content);
    text.innerHTML = parsed;
    /* console.log(`${content} -> ${parsed}`); */
  });
}

// See https://www.sliderrevolution.com/resources/css-hamburger-menu/
function setupLangSwitch(curLang, selector) {
  if (selector === undefined) {
    selector = 'menu.lang-switch';
  }
  const switcher = document.querySelector(selector);

  switcher.addEventListener('click', () => {
    switcher.querySelectorAll(`li`).forEach((lang) => {
      lang.classList.remove('inactive');
    });
  });

  // TODO: This doesn't really work as intended
  switcher.addEventListener('mouseout', () => {
    switcher.querySelectorAll(`li`).forEach((lang) => {
      if (!lang.classList.contains('active')) {
        lang.classList.add('inactive');
      }
    });
  });

  switcher.querySelectorAll(`li`).forEach((lang) => {
    var content = lang.innerText || lang.textContent;
    if (content.toUpperCase() == curLang.toUpperCase()) {
      lang.classList.add('active');
    } else {
      lang.classList.add('hidden');
    }
  });

}

function textEffects (selector) {
  if (selector === undefined) {
    selector = '.card *';
  }

//.post-text
//.post-title
  document.querySelectorAll(selector).forEach((fragment) => {

  });

}

function setupMenu() {
  document.querySelectorAll('#menu a').forEach((link) => {
    link.addEventListener('click', menuLinkHandler);
  });

  document.querySelector("input.burger-menu-button").addEventListener('click', (e) => {
    if (e.target.checked) {
        e.target.setAttribute('aria-expanded', "true");
        document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + "px";
        document.body.classList.add('no-scroll');
    } else {
        e.target.setAttribute('aria-expanded', "false");
        document.body.classList.remove('no-scroll');
        document.body.style.paddingRight = 0 + "px";
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {

  setupGrid('.cards', '.stack', 'section');
  let observer = new IntersectionObserver(handleCardIntersect, {root: null, rootMargin: "0px", threshold: buildThresholdList(colorSteps)});
  setupNav();
  parseMarkdown();
  setupMenu();
  setupLangSwitch(lang);
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  if (window.location.hash !== '') {
    var id;
    var target = document.querySelector(`*[data-slug='${window.location.hash}']`);
    if (target !== null && 'id' in target) {
      id = target.id;
    } else {
      id = window.location.hash;
    }


    console.log(`Moving to ${id}`)
  }


});
