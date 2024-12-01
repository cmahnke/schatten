import Color from "color";

type Directions = "left" | "right" | "up" | "down";
export const directions: Directions[] = ["left", "right", "up", "down"];

export const maxShade: number = 20; // In percent
export const colorSteps: number = (255 / 100) * maxShade;
let bgColor: Color;

document.addEventListener("DOMContentLoaded", function () {
  bgColor = new Color(
    getComputedStyle(document.body).getPropertyValue("--background-color"),
  );
});

export function findTarget(target: string): HTMLElement | null {
  let targetElem = document.getElementById(target);

  if (!targetElem) {
    targetElem = document.querySelector(`*[data-slug='${target}']`);
  }

  return targetElem;
}

export function generateURLFragment(
  col: string | undefined,
  row: string | undefined,
  fragment?: string,
): string | undefined {
  let id: string | undefined;

  if (col === undefined || row === undefined) {
    return undefined;
  }

  if (fragment === undefined) {
    id = `${col}/${row}`;
  } else {
    id = `${col}/${row}/${fragment}`;
  }

  const target = document.getElementById(id);
  if (target !== null && target !== undefined && "slug" in target.dataset) {
    id = target.dataset["slug"];
  }

  return id;
}

export function toggleNav(elem: HTMLElement) {
  for (const direction of directions) {
    if (direction in elem.dataset) {
      const clickHandler = () => {
        const targetId = elem.dataset[direction];
        if (targetId !== undefined) {
          console.log(`Scrolling to ${targetId}`);
          const target = document.getElementById(targetId);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          } else {
            console.error(`Target element '${targetId}' not found.`);
          }
        }
        return false;
      };

      document
        .querySelectorAll(`nav.stack-switcher a:has(.${direction})`)
        .forEach((arrow: Element) => {
          if (arrow instanceof HTMLAnchorElement) {
            arrow.classList.remove("hidden");
            arrow.onclick = clickHandler;
          }
        });
    } else {
      document
        .querySelectorAll(`nav.stack-switcher a:has(.${direction})`)
        .forEach((arrow: Element) => {
          if (arrow instanceof HTMLAnchorElement) {
            arrow.classList.add("hidden");
          }
        });
    }
  }
}

export function generatedCallback(elem: HTMLElement, targetId?: string) {
  if ("jump" in elem.dataset) {
    const targetId = elem.dataset["jump"];
    if (targetId !== undefined) {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        console.log(`Jumping to ${targetId}`);
      } else {
        console.error(`Target element '${targetId}' not found.`);
      }
    }
  }
}

export function handleCardIntersect(entries: IntersectionObserverEntry[]) {
  // See https://github.com/Qix-/color/issues/53#issuecomment-656590710
  function lightenBy(color: Color, amount: number): Color {
    const lightness = color.lightness();
    return color.lightness(lightness + amount);
  }

  entries.forEach((entry: IntersectionObserverEntry) => {
    let entryElement: HTMLDivElement;
    if (entry.target instanceof HTMLDivElement) {
      entryElement = entry.target;
    } else {
      return;
    }

    const shade = (1 - entry.intersectionRatio) * 100 * (maxShade / 100);
    const bg = lightenBy(bgColor, shade);
    if (!entry.target.classList.contains("__inserted")) {
      entryElement.style.backgroundColor = bg.hex();
    }

    if (!entry.isIntersecting || !entry.target.classList.contains("card")) {
      return;
    }

    let ratio: string = "1";

    if (entry.rootBounds === null || entryElement.parentNode === null) {
      return;
    }

    if (
      entry.rootBounds.height < entryElement.offsetHeight ||
      entry.rootBounds.width < entryElement.offsetWidth
    ) {
      // If we are in an overflowing element, just use the given intersaction to compute the ratio, if some heuristics apply
      if (
        entry.intersectionRect.width <
        (entryElement.parentNode as HTMLElement).getBoundingClientRect().width
      ) {
        return;
      }
      if (
        entry.intersectionRect.height <
        entry.rootBounds.height - entry.rootBounds.height / 20
      ) {
        return;
      }

      const clientSize =
        entry.boundingClientRect.width * entry.boundingClientRect.height;
      const intersectionSize =
        entry.intersectionRect.width * entry.intersectionRect.height;
      ratio = (intersectionSize / clientSize).toFixed(6);

      entryElement.dataset.ratio = ratio;
    }

    if (entry.intersectionRatio.toFixed(6) == ratio) {
      entry.target.classList.add("active");
      const urlFragment = generateURLFragment(
        entryElement.dataset.col,
        entryElement.dataset.row,
      );
      if (urlFragment !== undefined) {
        window.location.hash = urlFragment;
      }
      toggleNav(entry.target);

      if (
        entry.target != null &&
        entry.target.classList.contains("__inserted")
      ) {
        generatedCallback(entry.target);
      } else if (entry.target == null) {
        console.log("Card intersect got no target!");
      }

      /* TODO: Check if we really need the previous ones */
    } else if (
      entry.intersectionRatio < 1 &&
      entry.target.classList.contains("active")
    ) {
      entry.target.classList.remove("active");
      entry.target.classList.add("previous");
    } else if (entry.target.classList.contains("previous")) {
      entry.target.classList.remove("previous");
    }
  });
}

export function menuLinkHandler(e: Event) {
  // Check if target has href property and prevent default behavior if it does
  if (e.target instanceof HTMLAnchorElement && e.target.href !== undefined) {
    e.preventDefault();

    const target = e.target.href.split("#")[1]; // Extract target ID from href
    const targetElem = findTarget(target);

    // Scroll to target element if found
    if (targetElem) {
      targetElem.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Target element '${target}' not found`);
    }

    // Close menu (assuming burger-menu-button is a checkbox)
    const menuCheckbox = document.querySelector(
      ".menu .burger-menu-button",
    ) as HTMLInputElement;
    if (menuCheckbox) {
      menuCheckbox.checked = false;
    }
  }
}

export function buildThresholdList(numSteps: number): number[] {
  const thresholds: number[] = [];
  for (let i = 1.0; i <= numSteps; i++) {
    const ratio = i / numSteps;
    thresholds.push(ratio);
  }
  thresholds.push(0);
  // Add 0 as the final threshold
  return thresholds;
}

export function setupGrid(
  root: string,
  columnSelector: string,
  cardSelector: string,
) {
  function columnHeight(column: HTMLElement): number {
    return Array.from(column.querySelectorAll(".card")).reduce((h, card) => {
      return h + card.getBoundingClientRect().height;
    }, 0);
  }
  const rootSelector: HTMLElement | null = document.querySelector(root);
  if (rootSelector === null) {
    return;
  }
  const startSelector: HTMLElement = rootSelector;

  let maxHeight: number = 0;
  let maxCards: number = 0;
  let maxWidth: number = 0;
  const grid: { cards: number; height: number }[] = [];
  const columns: HTMLElement[] = Array.from(
    startSelector.querySelectorAll(columnSelector),
  );
  columns.forEach((column: HTMLElement) => {
    const cards = Array.from(
      column.querySelectorAll(cardSelector),
    ) as HTMLElement[];
    const numCards: number = cards.length;
    const overallHeight: number = columnHeight(column);

    maxWidth++;
    if (numCards > maxCards) {
      maxCards = numCards;
    }
    if (overallHeight > maxHeight) {
      maxHeight = overallHeight;
    }

    grid[maxWidth - 1] = { cards: numCards, height: overallHeight };

    console.log(`Cards ${numCards}, Overall height: ${overallHeight}`);
    column.dataset.col = maxWidth.toString();
    if (!column.hasAttribute("id")) {
      column.setAttribute("id", `${maxWidth}`);
    }
    for (let i = 0; i < cards.length; i++) {
      cards[i].dataset.row = (i + 1).toString();
      cards[i].dataset.col = maxWidth.toString();
      if (!cards[i].hasAttribute("id")) {
        cards[i].setAttribute("id", `${maxWidth}/${i + 1}`);
      }
    }
  });

  //Make the grid even
  for (let i = 0; i < grid.length; i++) {
    const column = startSelector.querySelectorAll(columnSelector)[i];
    if (grid[i].cards < maxCards) {
      const newTiles = maxCards - grid[i].cards;
      for (let n = 0; n < newTiles; n++) {
        //console.log(`Inserting at ${i + 1}/${grid[i].cards + 1 + n}, after ${grid[i]}`);
        const newCard = document.createElement(cardSelector);
        newCard.classList.add("__inserted");
        newCard.classList.add("card");
        newCard.dataset.row = (grid[i].cards + 1 + n).toString();
        newCard.dataset.col = (i + 1).toString();

        newCard.setAttribute("id", `${i + 1}/${grid[i].cards + 1 + n}`);
        let next;
        if (grid.length > i + 1) {
          next = `${i + 2}/1`;
        } else {
          next = "1/1";
        }
        newCard.dataset.jump = next;
        newCard.dataset.down = next;
        newCard.dataset.right = next;
        if (newTiles == n + 1) {
          //Last card
        }

        column.appendChild(newCard);
        grid[i].height = columnHeight(column as HTMLElement);
      }
    }
    //Add navigation links
    function lookArround(id: string) {
      const next = document.getElementById(id);
      if (next != null && next.classList.contains("__inserted")) {
        return false;
      } else if (next == null) {
        console.log(`Next element for id ${id} is null!`);
        return false;
      }
      return true;
    }

    const cards = Array.from(
      column.querySelectorAll(cardSelector),
    ) as HTMLElement[];
    for (let j = 0; j < cards.length; j++) {
      if (cards[j].classList.contains("__inserted")) {
        continue;
      }
      if (j > 0) {
        const nextId = `${i + 1}/${j}`;
        cards[j].dataset.up = nextId;
      }
      if (j + 1 < cards.length) {
        const nextId = `${i + 1}/${j + 2}`;
        if (lookArround(nextId)) {
          cards[j].dataset.down = nextId;
        }
      } else if (j + 1 == cards.length && i + 1 < maxWidth) {
        const nextId = `${i + 2}/1`;
        if (lookArround(nextId)) {
          cards[j].dataset.down = nextId;
        }
        console.log(`Reached end for ${i}/${j} => ${nextId}`);
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

  //Check for height differences
  if (
    window.getComputedStyle(startSelector).getPropertyValue("display") != "grid"
  ) {
    for (let k = 0; k < grid.length; k++) {
      if (grid[k].height < maxHeight) {
        const heightDiff = maxHeight - grid[k].height;
        const lastOfShort: HTMLElement | null = startSelector
          .querySelectorAll(columnSelector)[k].querySelector(`${cardSelector}:last-child`);
        if (lastOfShort !== null) {
          const oldHeight = lastOfShort.getBoundingClientRect().height;
          const newHeight = oldHeight + heightDiff;
          lastOfShort.style.height = `${newHeight}px`;
        }
        //console.log(`column ${i + 1} has wrong height, is ${grid[i].height}, maximum is ${maxHeight}, setting height of ${lastOfShort.id} to ${newHeight}`);
      }
    }
  }
}

/*
export function setupNav(selector) {
  if (selector === undefined) {
    for (const direction of directions) {
      selector += `nav.stack-switcher .${direction},`;
    }
    selector = selector.substring(0, selector.length - 1);
  }
  document.querySelectorAll(selector).forEach((arrow) => {
    arrow.classList.add("hidden");
  });
  //TODO: This doen't always work
  document.addEventListener("scroll", () => {
    document.querySelectorAll(selector).forEach((arrow) => {
      arrow.classList.add("hidden");
    });
  });
}
*/

export function setupNav(selector?: string) {
  if (!selector) {
    selector = directions
      .map((direction) => `nav.stack-switcher .${direction}`)
      .join(",");
  }

  document.querySelectorAll(selector).forEach((arrow) => {
    arrow.classList.add("hidden");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");
        } else {
          entry.target.classList.add("hidden");
        }
      });
    },
    { threshold: 1.0 },
  );

  document.querySelectorAll(selector).forEach((arrow) => {
    observer.observe(arrow);
  });
}

/*
export function checkColumns(root, columnSelector) {
  const startSelector = document.querySelector(root);
  const columns = startSelector.querySelectorAll(columnSelector).length;

  if (
    window.getComputedStyle(startSelector).getPropertyValue("display") == "grid"
  ) {
    const gridTemplate = window
      .getComputedStyle(startSelector)
      .getPropertyValue("grid-template-columns");

    if (gridTemplate.split(" ").length != columns) {
      const templateColumn = `repeat(${columns}, calc(100vw - 1rem))`;
      console.log(
        `Setting grid-template-column on ${root} to ${templateColumn}`,
      );
      startSelector.style.gridTemplateColumns = templateColumn;
    }
  }
  return columns;
}
*/

export function checkColumns(root: string, columnSelector: string): number {
  const startSelector = document.querySelector(root) as HTMLElement;

  if (!startSelector) {
    throw new Error(`Element with selector "${root}" not found`);
  }

  const columns = startSelector.querySelectorAll(columnSelector).length;

  if (window.getComputedStyle(startSelector).display === "grid") {
    const gridTemplate =
      window.getComputedStyle(startSelector).gridTemplateColumns;

    const actualColumns = gridTemplate.split(" ").length;
    if (actualColumns !== columns) {
      const templateColumn = `repeat(${columns}, calc(100vw - 1rem))`;
      console.log(
        `Setting grid-template-column on ${root} to ${templateColumn}`,
      );
      startSelector.style.gridTemplateColumns = templateColumn;
    }
  }
  return columns;
}

export function checkWindowResize() {
  //TODO: Also check if window has been moved to another screen
  window.addEventListener("resize", () => {
    //TODO: Check if we need to recalculate more properties here
    console.log(`Resized window to ${window.innerWidth}x${window.innerHeight}`);
    /*
    if (canvas !== null) {
      canvas.dispatchEvent(new Event(REDRAW_EVENT_NAME));
    }
    */
  });
}
