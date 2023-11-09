(()=>{
    const openMenuBtnRef = document.querySelector("[data-open-menu-button]");
    const closeMenuBtnRef = document.querySelector("[data-close-menu-button]");
    const mobileMenuRef = document.querySelector("[data-mobile-menu]");
    openMenuBtnRef.addEventListener("click", ()=>{
        mobileMenuRef.classList.add("is-open");
    });
    closeMenuBtnRef.addEventListener("click", ()=>{
        mobileMenuRef.classList.remove("is-open");
    });
})();

//# sourceMappingURL=index.707f265c.js.map
