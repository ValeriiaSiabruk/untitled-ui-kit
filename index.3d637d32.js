(()=>{
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    menuBtnRef.addEventListener("click", ()=>{
        const isOpen = !menuBtnRef.getAttribute("aria-expanded");
        menuBtnRef.classList.toggle("is-open");
        mobileMenuRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", isOpen);
    });
})();

//# sourceMappingURL=index.3d637d32.js.map
