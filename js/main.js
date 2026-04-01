(function (window, document) {
  function init() {
    if (window.Vertimpact && window.Vertimpact.header) {
      window.Vertimpact.header.init();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
    return;
  }

  init();
})(window, document);
