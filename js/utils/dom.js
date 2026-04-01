(function (window) {
  const dom = {
    qs(selector, scope = document) {
      return scope.querySelector(selector);
    },
    qsa(selector, scope = document) {
      return Array.from(scope.querySelectorAll(selector));
    },
  };

  window.Vertimpact = window.Vertimpact || {};
  window.Vertimpact.dom = dom;
})(window);
