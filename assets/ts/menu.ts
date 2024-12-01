export function setupMenu(menuLinkHandler: (e: Event) => void): void {
  // Add click event listener to menu links
  document.querySelectorAll("#menu a").forEach((link: Element) => {
    if (link instanceof HTMLAnchorElement) {
      link.addEventListener("click", menuLinkHandler);
    }
  });

  // Add click event listener to burger menu button
  const burgerButton = document.querySelector(
    "input.burger-menu-button",
  ) as HTMLInputElement;
  if (burgerButton) {
    burgerButton.addEventListener("click", (e: MouseEvent) => {
      //const input = e.target as HTMLInputElement;
      if (e.target instanceof HTMLInputElement) {
        if (e.target.checked) {
          const activeCard = document.querySelector(".card.active");
          if (activeCard) {
            e.target.dataset.caller = activeCard.id;
            e.target.setAttribute("aria-expanded", "true");
            document.body.classList.add("noscroll");
          }
        } else {
          e.target.setAttribute("aria-expanded", "false");
          document.body.classList.remove("noscroll");
          const activeId = e.target?.dataset.caller;
          if (activeId) {
            const activeCard = document.getElementById(activeId);
            if (activeCard) {
              activeCard.scrollIntoView({ behavior: "smooth" });
            } else {
              console.log("Last active card is null!");
            }
          }
        }
      }
    });
  } else {
    console.error("Burger menu button not found!");
  }
}
