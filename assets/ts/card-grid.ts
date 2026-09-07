// schatten/assets/ts/card-grid.ts
import Color from "color";

import { showTextEffect, resetTextEffects } from "./util";

type ColorInstance = InstanceType<typeof Color>;
type Directions = "left" | "right" | "up" | "down";

const directions: Directions[] = ["left", "right", "up", "down"];

export const maxShade: number = 20;
export const colorSteps: number = Math.round((255 / 100) * maxShade);

let bgColor: ColorInstance = new Color("#ffffff");

document.addEventListener("DOMContentLoaded", function () {
  const rawColor = getComputedStyle(document.body)
    .getPropertyValue("--background-color")
    .trim();
  bgColor = rawColor ? new Color(rawColor) : new Color("#ffffff");
});

export function isDirection(s: string): s is Directions {
  return (directions as string[]).includes(s);
}

export function findTarget(target: string): HTMLElement | null {
  let targetElem = document.getElementById(target);
  if (!targetElem) {
    // Scope the slug lookup to the card grid, the menu icons carry the
    // same data-slug attributes and would match first
    targetElem = document.querySelector(`.cards *[data-slug='${target}']`);
  }
  return targetElem;
}

export function generateURLFragment(
  col: string | undefined,
  row: string | undefined,
  fragment?: string,
): string | undefined {
  if (col === undefined || row === undefined) {
    return undefined;
  }

  let id =
    fragment === undefined ? `${col}/${row}` : `${col}/${row}/${fragment}`;

  const target = document.getElementById(id);
  if (target !== null && "slug" in target.dataset) {
    id = target.dataset.slug!;
  }
  return id;
}

/*
 * scrollIntoView is unreliable in combination with the mandatory scroll
 * snapping (instant scrolling can be swallowed entirely), so navigation
 * scrolls the viewport directly to the target position instead.
 */
export function scrollToCard(
  card: HTMLElement,
  behavior: ScrollBehavior = "smooth",
) {
  const rect = card.getBoundingClientRect();
  const maxLeft = document.documentElement.scrollWidth - window.innerWidth;
  const maxTop = document.documentElement.scrollHeight - window.innerHeight;
  window.scrollTo({
    left: Math.max(0, Math.min(window.scrollX + rect.left, maxLeft)),
    top: Math.max(0, Math.min(window.scrollY + rect.top, maxTop)),
    behavior,
  });
}

/*
 * The card a smooth scroll is currently moving towards. Arrow clicks are
 * relative to it while the scroll is still in flight, so repeated clicks
 * keep moving in the same direction instead of acting on the stale
 * position. It's cleared whenever the scrolling settles.
 */
let navTarget: HTMLElement | null = null;

function arrowClickHandler(direction: Directions) {
  return (e: Event) => {
    e.preventDefault();
    const base =
      navTarget ?? document.querySelector<HTMLElement>("section.card.active");
    const targetId: string | undefined = base?.dataset[direction];
    if (targetId === undefined) return;
    const target = document.getElementById(targetId);
    if (target) {
      navTarget = target;
      // Start the text fade now, so it runs during the slide
      showTextEffect(target);
      scrollToCard(target);
    } else {
      console.error(`Target element '${targetId}' not found.`);
    }
  };
}

/*
 * Shows the arrows of the directions that the given card can move to and
 * hides all others
 */
export function toggleNav(elem: HTMLElement) {
  for (const direction of directions) {
    const movable: boolean = elem.dataset[direction] !== undefined;
    document
      .querySelectorAll(`nav.stack-switcher a:has(.${direction})`)
      .forEach((arrow: Element) => {
        if (!(arrow instanceof HTMLAnchorElement)) {
          console.error(
            `Arrow element for direction '${direction}' is not an anchor element.`,
          );
          return;
        }
        if (movable) {
          arrow.classList.remove("hidden");
        } else {
          arrow.classList.add("hidden");
        }
      });
  }
}

export function generatedCallback(elem: HTMLElement) {
  if ("jump" in elem.dataset) {
    const targetId = elem.dataset["jump"];
    if (targetId !== undefined) {
      const target = document.getElementById(targetId);
      if (target) {
        scrollToCard(target);
      } else {
        console.error(`Target element '${targetId}' not found.`);
      }
    }
  }
}

function lightenBy(color: ColorInstance, amount: number): ColorInstance {
  const lightness = color.lightness();
  return color.lightness(lightness + amount);
}

export function handleCardIntersect(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (!(entry.target instanceof HTMLElement)) {
      return;
    }
    const entryElement: HTMLElement = entry.target;

    const shade = (1 - entry.intersectionRatio) * 100 * (maxShade / 100);
    const bg = lightenBy(bgColor, shade);
    if (!entryElement.classList.contains("__inserted")) {
      entryElement.style.backgroundColor = bg.hex();
    }
  });
}

export function menuLinkHandler(e: Event) {
  if (e.target instanceof HTMLAnchorElement && e.target.href !== "") {
    e.preventDefault();

    const parts = e.target.href.split("#");
    if (parts.length < 2) return;
    const target = parts[1];

    // Close the menu first: while it's open the body gets the "noscroll"
    // class which locks the scrolling, so the scroll below wouldn't work
    const menuCheckbox = document.querySelector<HTMLInputElement>(
      ".menu .burger-menu-button",
    );
    if (menuCheckbox) {
      menuCheckbox.checked = false;
      menuCheckbox.setAttribute("aria-expanded", "false");
    }
    document.body.classList.remove("noscroll");

    const targetElem = findTarget(target);

    if (targetElem) {
      navTarget = targetElem;
      // Start the text fade now, so it runs during the slide
      showTextEffect(targetElem);
      scrollToCard(targetElem);
    } else {
      console.error(`Target element '${target}' not found.`);
    }
  }
}

export function buildThresholdList(numSteps: number): number[] {
  const thresholds: number[] = [];
  for (let i = 1.0; i <= numSteps; i++) {
    const ratio = i / numSteps;
    thresholds.push(Math.min(1.0, ratio));
  }
  thresholds.push(0);
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

  const container: HTMLElement | null = document.querySelector(root);
  if (container === null) {
    return;
  }

  let maxCards: number = 0;
  let maxWidth: number = 0;
  const grid: { cards: number; height: number }[] = [];

  const columns: HTMLElement[] = Array.from(
    container.querySelectorAll(columnSelector),
  );

  columns.forEach((column: HTMLElement) => {
    const cards = Array.from(
      column.querySelectorAll(cardSelector),
    ) as HTMLElement[];
    const numCards: number = cards.length;
    const overallHeight: number = columnHeight(column);

    maxWidth++;
    if (numCards > maxCards) maxCards = numCards;

    grid[maxWidth - 1] = { cards: numCards, height: overallHeight };

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

  console.log(`Initial grid setup: maxWidth=${maxWidth}, maxCards=${maxCards}`);

  // Make the grid even
  for (let i = 0; i < grid.length; i++) {
    const column = columns[i];

    if (grid[i].cards < maxCards) {
      const newTiles = maxCards - grid[i].cards;
      for (let n = 0; n < newTiles; n++) {
        const newCard = document.createElement("div");
        newCard.classList.add("__inserted", "card");
        newCard.dataset.row = (grid[i].cards + 1 + n).toString();
        newCard.dataset.col = (i + 1).toString();
        newCard.setAttribute("id", `${i + 1}/${grid[i].cards + 1 + n}`);

        const next = grid.length > i + 1 ? `${i + 2}/1` : "1/1";
        newCard.dataset.jump = next;
        newCard.dataset.down = next;
        newCard.dataset.right = next;

        column.appendChild(newCard);
        grid[i].height = columnHeight(column);
      }
    }

    const lookAround = (id: string): boolean => {
      const next = document.getElementById(id);
      if (next === null) {
        console.log(`Next element for id ${id} is null!`);
        return false;
      }
      return !next.classList.contains("__inserted");
    };

    const cards = Array.from(
      column.querySelectorAll(cardSelector),
    ) as HTMLElement[];

    for (let j = 0; j < cards.length; j++) {
      if (cards[j].classList.contains("__inserted")) continue;

      if (j > 0) {
        cards[j].dataset.up = `${i + 1}/${j}`;
      }
      if (j + 1 < cards.length) {
        const nextId = `${i + 1}/${j + 2}`;
        if (lookAround(nextId)) {
          cards[j].dataset.down = nextId;
        }
      } else if (j + 1 === cards.length && i + 1 < maxWidth) {
        const nextId = `${i + 2}/1`;
        if (lookAround(nextId)) {
          cards[j].dataset.down = nextId;
        }
      }
      if (i + 1 < maxWidth) {
        const nextId = `${i + 2}/${j + 1}`;
        if (lookAround(nextId)) cards[j].dataset.right = nextId;
      }
      if (i > 0) {
        const nextId = `${i}/${j + 1}`;
        if (lookAround(nextId)) cards[j].dataset.left = nextId;
      }
    }
  }

  rebalanceHeights(container, columns, cardSelector);
}

export function setupNav(selector?: string) {
  if (!selector) {
    selector = directions
      .map((direction) => `nav.stack-switcher .${direction}`)
      .join(", ");
  }

  // Start with all arrows hidden, visibility is managed by toggleNav()
  document.querySelectorAll(selector).forEach((arrow) => {
    arrow.parentElement?.classList.add("hidden");
  });

  // The click handlers are bound once and read the active card at click
  // time, toggleNav() only manages the visibility of the arrows
  for (const direction of directions) {
    document
      .querySelectorAll(`nav.stack-switcher a:has(.${direction})`)
      .forEach((arrow) => {
        if (arrow instanceof HTMLAnchorElement) {
          arrow.onclick = arrowClickHandler(direction);
        }
      });
  }
}

/*
 * The active card is the one the scrolling rests on (scroll snapping is
 * mandatory on both axes). It's determined on scroll settle instead of
 * evaluating IntersectionObserver ratios, because the resting ratio of a
 * card can fall between two thresholds, so the observer never fires an
 * entry for the final position.
 */

function visibleArea(element: HTMLElement): number {
  const rect = element.getBoundingClientRect();
  const width =
    Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
  const height =
    Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  return Math.max(0, width) * Math.max(0, height);
}

export function findMostVisibleCard(
  selector = "section.card",
): HTMLElement | null {
  let best: HTMLElement | null = null;
  let bestArea = 0;
  document.querySelectorAll<HTMLElement>(selector).forEach((card) => {
    const area = visibleArea(card);
    if (area > bestArea) {
      bestArea = area;
      best = card;
    }
  });
  return best;
}

export function setActiveCard(card: HTMLElement | null): boolean {
  if (card === null || card.classList.contains("active")) {
    return false;
  }

  document
    .querySelectorAll<HTMLElement>("section.card.active")
    .forEach((current) => {
      current.classList.remove("active");
      current.classList.add("previous");
    });
  card.classList.remove("previous");
  card.classList.add("active");

  // The text of the active card fades in, everything else is reset and
  // stays hidden until it becomes a navigation target or slides into view
  resetTextEffects(card);
  showTextEffect(card);

  const urlFragment = generateURLFragment(card.dataset.col, card.dataset.row);
  if (
    urlFragment !== undefined &&
    window.location.hash.substring(1) !== urlFragment
  ) {
    history.pushState({ fragment: urlFragment }, "", `#${urlFragment}`);
  }
  toggleNav(card);

  if (card.classList.contains("__inserted")) {
    generatedCallback(card);
  }
  return true;
}

export function checkScrollSettle(selector = "section.card") {
  setActiveCard(findMostVisibleCard(selector));
  navTarget = null;
}

let settleTimer: ReturnType<typeof setTimeout> | undefined;
let scrollNavAttached = false;
let popstateToken = 0;

export function setupScrollNav(selector = "section.card") {
  if (scrollNavAttached) {
    return;
  }
  scrollNavAttached = true;

  // Chrome's scroll restoration is unreliable for pushState entries with
  // scroll snapping, the popstate handler below positions the view instead
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  const settle = () => checkScrollSettle(selector);

  // scrollend doesn't bubble, use capturing to also get events from
  // scrolling containers like the horizontally scrolling body
  if (typeof onscrollend !== "undefined") {
    window.addEventListener("scrollend", settle, { capture: true });
  } else {
    window.addEventListener(
      "scroll",
      () => {
        clearTimeout(settleTimer);
        settleTimer = setTimeout(settle, 200);
      },
      { capture: true, passive: true },
    );
  }

  window.addEventListener("popstate", () => {
    const hashValue = window.location.hash.substring(1);
    if (hashValue === "" || isDirection(hashValue)) {
      return;
    }
    const target = findTarget(hashValue);
    if (!(target instanceof HTMLElement)) {
      return;
    }
    showTextEffect(target);
    // Defer and scroll instantly: scrolling synchronously inside the
    // popstate handler doesn't work, and the traversal can swallow a
    // programmatic scroll started too early, so the result gets verified
    // and retried. The token guards against overlapping navigations.
    const token = ++popstateToken;
    requestAnimationFrame(() => {
      if (token !== popstateToken) return;
      scrollToCard(target, "instant");
      checkScrollSettle(selector);
    });
    setTimeout(() => {
      if (token !== popstateToken || target.classList.contains("active")) {
        return;
      }
      scrollToCard(target, "instant");
      checkScrollSettle(selector);
    }, 250);
  });
}

export function checkColumns(root: string, columnSelector: string): number {
  const startSelector = document.querySelector<HTMLElement>(root);

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
      startSelector.style.gridTemplateColumns = templateColumn;
    }
  }
  return columns;
}

function rebalanceHeights(
  container: HTMLElement,
  columns: HTMLElement[],
  cardSelector: string,
) {
  if (window.getComputedStyle(container).display === "grid") return;

  const heights = columns.map((col) =>
    Array.from(col.querySelectorAll(".card")).reduce(
      (h, card) => h + card.getBoundingClientRect().height,
      0,
    ),
  );

  const maxHeight = Math.max(...heights);

  columns.forEach((col, k) => {
    const last = col.querySelector<HTMLElement>(`${cardSelector}:last-child`);
    if (!last) return;

    last.style.height = "";

    if (heights[k] < maxHeight) {
      const diff = maxHeight - heights[k];
      last.style.height = `${last.getBoundingClientRect().height + diff}px`;
    }
  });
}

export function checkWindowResize(
  root: string,
  columnSelector: string,
  cardSelector: string,
) {
  let resizeTimer: ReturnType<typeof setTimeout> | undefined;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      console.log(`Resized to ${window.innerWidth}x${window.innerHeight}`);

      const container = document.querySelector<HTMLElement>(root);
      if (!container) return;

      const columns = Array.from(
        container.querySelectorAll<HTMLElement>(columnSelector),
      );

      checkColumns(root, columnSelector);
      rebalanceHeights(container, columns, cardSelector);
      checkScrollSettle();
    }, 150);
  });
}
