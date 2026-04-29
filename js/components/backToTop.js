(function (window, document) {

  const getThreshold = () => window.innerHeight * 2;
  const buttonTop = document.querySelector('.button-back__wrapper'); 
  if (!buttonTop) return;
  
  function updateButtonVisibility() {
    const isVisible = window.scrollY > getThreshold();

    buttonTop.classList.toggle("visible", isVisible);
    buttonTop.classList.toggle("hidden", !isVisible);
  }

  window.addEventListener("scroll", updateButtonVisibility);
  window.addEventListener("load", updateButtonVisibility);


 if (
   !typeof window.Vertimpact.scroll.scrollToTop === "function" &&
   !window.Vertimpact.scroll &&
   !window.Vertimpact
  ) return;
  buttonTop.addEventListener("click", () => {
    window.Vertimpact.scroll.scrollToTop();
  });


})(window, document); 