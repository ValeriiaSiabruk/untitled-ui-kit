(() => {
  const openMenuBtnRef = document.querySelector('[data-open-menu-button]');
  const closeMenuBtnRef = document.querySelector('[data-close-menu-button]');
  const mobileMenuRef = document.querySelector('[data-mobile-menu]');
  const body = document.querySelector('body');

  openMenuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.add('is-open');
    body.classList.add('overflow-hidden');
  });

  closeMenuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.remove('is-open');
    body.classList.remove('overflow-hidden');
  });
})();
