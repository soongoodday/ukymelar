document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const header = document.querySelector('header');
    const backColor = document.querySelector('.back_color');

    if (!menuBtn || !header) return;

    let scrollY = 0;

    function openMenu() {
        scrollY = window.scrollY;

        menuBtn.classList.add('active');
        header.classList.add('menu-open');

        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.width = '100%';
    }

    function closeMenu() {
        menuBtn.classList.remove('active');
        header.classList.remove('menu-open');

        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.width = '';

        window.scrollTo(0, scrollY);
    }

    menuBtn.addEventListener('click', () => {
        header.classList.contains('menu-open') ? closeMenu() : openMenu();
    });

    if (backColor) {
        backColor.addEventListener('click', closeMenu);
    }
});