import getElementPosition from "./utilities.js";

const delay = (n) => new Promise(r => setTimeout(r, n * 1000));

function scroll(e) {

  const sections = document.querySelectorAll("section");
  for (let [i, sectionActual] of sections.entries()) {
    if (getElementPosition(sectionActual, -300)) {
      if (e.wheelDeltaY < 0) {
        window.scrollTo({
          top: sections[i + 1]?.offsetTop,
          behavior: "smooth",
        });
      } else if (e.wheelDeltaY > 0 && i > 0) {
        window.scrollTo({
          top: sections[i - 1]?.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }
}

window.addEventListener("wheel", async (e) => {
  scroll(e);
  await delay(1);
}, false);

export function scrollDown() {
  const sections = document.querySelectorAll("section");
  for (let [i, sectionActual] of sections.entries()) {
    if (getElementPosition(sectionActual, -300)) {
      window.scrollTo({
        top: sections[i + 1]?.offsetTop,
        behavior: "smooth",
      });
    }
  }
}
export function scrollUp() {
  const sections = document.querySelectorAll("section");
  for (let [i, sectionActual] of sections.entries()) {
    if (getElementPosition(sectionActual, -300)) {
      window.scrollTo({
        top: sections[i - 1]?.offsetTop,
        behavior: "smooth",
      });
    }
  }
}

