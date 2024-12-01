//import { inView } from "motion"

function inView(fragment: Element, callback: () => void): void {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(fragment);
}

export function textEffects() {
  const inViewEffects: { [key: string]: { class: string; duration: number } } =
    {
      ".card .post-body": { class: "text-focus-in", duration: 1000 },
    };

  Object.keys(inViewEffects).forEach((sel) => {
    document.querySelectorAll(sel).forEach((fragment: Element) => {
      inView(fragment, () => {
        fragment.classList.add(inViewEffects[sel].class);
        setTimeout(() => {
          fragment.classList.remove(inViewEffects[sel].class);
        }, inViewEffects[sel].duration);
      });
    });
  });
}
