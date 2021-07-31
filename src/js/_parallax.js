export function moveElement() {

    const main_screen = document.querySelector('.main-screen');

    if (main_screen) {
        const clouds = document.querySelector('.main-screen__item_clouds');
        const mountains = document.querySelector('.main-screen__item_mountains');
        const human = document.querySelector('.main-screen__item_human');

        const forClouds = 40;
        const forMountains = 20;
        const forHuman = 10;

        const speed = 0.004;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;


        main_screen.addEventListener("mousemove", function (e) {
            //Получение ширины и высоты блока
            const parallaxWidth = main_screen.offsetWidth;
            const parallaxHeight = main_screen.offsetHeight;
            //Ноль по середине
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);


            clouds.setAttribute("style", "transform: translate(" + positionX / forClouds + "%, " + positionY / forClouds + "%);");
            mountains.setAttribute("style", "transform: translate(" + positionX / forMountains + "%, " + positionY / forMountains + "%);");
            human.setAttribute("style", "transform: translate(" + positionX / forHuman + "%, " + positionY / forHuman + "%);");
            /*
                        clouds.style.cssText = 'transform:translate(${positionX / forClouds}%,${positionY / forClouds}%);';
                        mountains.style.cssText = 'transform:translate(${positionX / forMountains}%,${positionY / forMountains}%);';
                        human.style.cssText = 'transform:translate(${positionX / forHuman}%,${positionY / forHuman}%);';*/

            requestAnimationFrame(setMouseParallaxStyle);

        }
        setMouseParallaxStyle();

        //Parallax при скролле

        let thresholdSets = [];
        for (let i = 0; i <= 1.0; i += 0.005) {
            thresholdSets.push(i);
        }

        const callback = function (entries, observer) {
            const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
            setParallaxItemsStyle(scrollTopProcent);
        };

        const observer = new IntersectionObserver(callback, {
            threshold: thresholdSets
        });

        // observer.observe(document.querySelector('.content'));

        function setParallaxItemsStyle(scrollTopProcent) {
            clouds.style.cssText = `transform: translate(0%, - ${scrollTopProcent / 9}%);`;
            mountains.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 6}%);`;
            human.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%);`;
        }
    }
}

