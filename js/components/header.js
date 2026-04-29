(function (window, document) {
  const selectors = {
    header: "header",
    burger: ".header__burger",
    navLinks: 'a[href^="#"]',
  };

  function setMenuState(button, isExpanded) {
    button.setAttribute("aria-expanded", String(isExpanded));
    button.classList.toggle("active", isExpanded);
  }

  function closeMobileMenu(header, burger) {
    if (!header || !burger) {
      return;
    }

    setMenuState(burger, false);
    header.classList.remove("mobile-open");
  }

  function initAnchorNavigation(header, burger) {
    const links = document.querySelectorAll(selectors.navLinks);

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");

        if (!href || href === "#") {
          return;
        }

        const target = document.querySelector(href);

        if (!target) {
          return;
        }

        event.preventDefault();

        if (
          window.Vertimpact &&
          window.Vertimpact.scroll &&
          typeof window.Vertimpact.scroll.scrollToTarget === "function"
        ) {
          window.Vertimpact.scroll.scrollToTarget(href);
        }

        history.pushState(null, "", href);
        closeMobileMenu(header, burger);
      });
    });
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

      closeMobileMenu(header, burger);
    });

    initAnchorNavigation(header, burger);
  }

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll('.header__item a[href^="#"]');

  function setActiveLink() {
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    const scrollPosition = window.scrollY + headerHeight + 40;

    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSectionId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const linkId = link.getAttribute("href").slice(1);
      link.classList.toggle("active-section", linkId === currentSectionId);
    });
  }

  window.addEventListener("scroll", setActiveLink);
  window.addEventListener("load", setActiveLink);

  window.Vertimpact = window.Vertimpact || {};
  window.Vertimpact.header = {
    init: initHeaderMenu,
  };
})(window, document);
