/**
 * Add a event that hidden the loadding sniper when the document content is loaded
 */
 export function removeLoadingWhenloaded() {
  window.addEventListener("load", () => {
    const $charging = document.querySelector(".charging")
    if($charging) $charging.style.display = "none";
  });
}

/**
 * Show the loading sniper
 */
 export function showLoading() {
  window.addEventListener("load", () => {
    const $charging = document.querySelector(".charging")
    if($charging) $charging.style.display = "flex";
  });
}
