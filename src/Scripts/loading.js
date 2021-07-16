/**
 * Add a event that hidden the loadding sniper when the document content is loaded
 */
export function removeLoadingWhenloaded() {
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".charging").style.display = "none";
  });
}
/**
 * Show the loading sniper
 */
export function showLoading() {
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".charging").style.display = "flex";
  });
}
