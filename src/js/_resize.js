export function resizeWindow() {
    const search_form = document.querySelector('.search-form');

    if (window.matchMedia("(max-width: 576px)").matches) {
        search_form.classList.add('active');
    } else {
        search_form.classList.remove('active');
    }

    window.addEventListener('resize', function (e) {
        if (window.matchMedia("(max-width: 576px)").matches) {
            search_form.classList.add('active');
        } else {
            search_form.classList.remove('active');
        }
    });
}



