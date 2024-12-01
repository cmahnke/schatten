type PreloadFonts = { [key: string]: string };

export function fontsLoaded(fonts: PreloadFonts): void {
  let interval: ReturnType<typeof setTimeout> | null = null;
  const timeouts: ReturnType<typeof setTimeout>[] = [];

  function fontCheck() {
    if (document.fonts) {
      for (const font in fonts) {
        if (document.fonts.check(fonts[font])) {
          document.querySelector("body")?.classList.add(`${font}-loaded`);
        }
      }
    }

    if (interval) {
      clearInterval(interval);
    }
  }

  for (const font in fonts) {
    timeouts.push(
      setTimeout(() => {
        document.querySelector("body")?.classList.add(`${font}-loaded`);
      }, 3000),
    );
  }

  interval = setInterval(fontCheck, 200);
}
