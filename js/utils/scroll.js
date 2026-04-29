(function (window, document) {
  function getHeaderOffset() {
    const header = document.querySelector("header");
    return header ? header.offsetHeight : 0;
  }

  function scrollToTarget(targetSelector) {
    const target = document.querySelector(targetSelector);

    if (!target) {
      return;
    }

    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  window.Vertimpact = window.Vertimpact || {};
  window.Vertimpact.scroll = {
    scrollToTarget,
    scrollToTop,
    getHeaderOffset,
  };
})(window, document);
