/**
 * check if the item is already in view of the user
 * @param {HTMLElement} element
 * @param {-300 | -660} screenHeight
 * @returns {boolean}
 */
function getElementPosition(element, screenHeight) {
  if (!element) return;

  const height = window.innerHeight;
  const result = element.getBoundingClientRect().top;
  return result > screenHeight && result < height / 1.5;
}

export default getElementPosition;
