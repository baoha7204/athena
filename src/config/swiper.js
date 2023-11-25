const swiperParams = {
    slidesPerView: 2,
    navigation: true,
    spaceBetween: 40,
    injectStyles: [
        `
        .swiper {
          overflow: visible;
        }
        `,
    ],
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
};

export default swiperParams;
