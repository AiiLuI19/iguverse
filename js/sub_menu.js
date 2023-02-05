(() => {
    const refs = {
      openMenuBtn: document.querySelector(".sub-menu-open-btn"),
      closeMenuBtn: document.querySelector(".menu-close-btn"),
      subMenu: document.querySelector(".mob-menu"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleSubMenu);
    refs.closeMenuBtn.addEventListener("click", toggleSubMenu);
  
    function toggleSubMenu() {
      refs.menu.classList.toggle("is-hidden");
    }
  })();