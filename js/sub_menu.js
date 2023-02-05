(() => {
    const refs = {
      openMenuBtn: document.querySelector(".dropdown-toggle"),
      closeMenuBtn: document.querySelector(".menu-close-btn"),
      subMenu: document.querySelector(".dropdown-menu"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleSubMenu);
    refs.closeMenuBtn.addEventListener("click", toggleSubMenu);
  
    function toggleSubMenu() {
      refs.subMenu.classList.toggle("is-hidden");
    }
  })();