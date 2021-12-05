/**
 * Add a event that hidden the loadding sniper when the document content is loaded
 */
function removeLoadingWhenloaded() {
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".charging").style.display = "none";
  });
}

/**
 * Show the loading sniper
 */
function showLoading() {
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".charging").style.display = "flex";
  });
}

export {
  showLoading,
  removeLoadingWhenloaded

}