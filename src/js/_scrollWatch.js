export function scrollWatch() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (this.pageYOffset >= 100) {
            header.style.cssText = 'background-color: #0B1D26; padding: 30px 0';
        }
        else {
            header.style.cssText = 'background-color: transparent; padding: 64px 0';
        }
    });
}



