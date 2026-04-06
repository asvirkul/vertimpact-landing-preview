(function (window, document) {
  const selectors = {
    header: "header",
    burger: ".header__burger",
  };

  function setMenuState(button, isExpanded) {
    button.setAttribute("aria-expanded", String(isExpanded));
    button.classList.toggle("active", isExpanded);
  }

  function initHeaderMenu() {
    const header = document.querySelector(selectors.header);
    const burger = document.querySelector(selectors.burger);

    if (!header || !burger) {
      return;
    }

    burger.addEventListener("click", () => {
      const isExpanded = burger.getAttribute("aria-expanded") === "true";
      const nextState = !isExpanded;

      setMenuState(burger, nextState);
      header.classList.toggle("mobile-open", nextState);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") {
        return;
      }

      setMenuState(burger, false);
      header.classList.remove("mobile-open");
    });
  }

  window.Vertimpact = window.Vertimpact || {};
  window.Vertimpact.header = {
    init: initHeaderMenu,
  };
})(window, document);
