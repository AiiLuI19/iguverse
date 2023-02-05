(() => {
    const refs = {
      openMenuBtn: document.querySelector(".dropdown-toggle"),
      closeMenuBtn: document.querySelector(".menu-close-btn"),
      subMenu: document.querySelector(".dropdown_menu"),
      body:document.querySelector("#body"),
      
    };
  
    refs.openMenuBtn.addEventListener("click", toggleSubMenu);
    refs.closeMenuBtn.addEventListener("click", toggleSubMenu);
    
    
  
    function toggleSubMenu() {
        event.preventDefault();
      const open= refs.subMenu.classList.toggle("is-hidden");
    // const open= refs.subMenu.classList.remove("is-hidden");
      console.log(open)
    //   if (open){
    //     body.addEventListener("click",(e)=>{
    //         if(e.target===refs.subMenu){
    //             return;
    //         } 
    //         refs.subMenu.classList.add("is-hidden");
    //     })
    //   }
    }
    
   
  })();
//   const dropdown= document.querySelector(".is-hidden");
//     document.addEventListener("click", (e) => {
//         const withinBoundaries = e.composedPath().includes(dropdown);
//      console.log(withinBoundaries);
//         if ( withinBoundaries ) {
//           console.log("ok");
//             dropdown.style.display = 'none'; // скрываем элемент т к клик был за его пределами
//         }
//     });

  


  