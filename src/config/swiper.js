const swiperParams = {
    slidesPerView: 2,
    navigation: true,
    spaceBetween: 32,
    injectStyles: [
        `
        .swiper {
          overflow: visible;
        }
        .swiper-button-next, .swiper-button-prev{
            width: var(--default-layout-padding-X);
            color: white;
            opacity: 0;
            height: inherit;
            margin-top: 0;
            top: 0;
            transition: all 0.2s linear 0s;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover{
            opacity: 1;
        }
        .swiper-button-prev, .swiper-rtl .swiper-button-next{
            left: 0;
            transform: translateX(-100%);
            margin-right: 30px;
        }
        .swiper-button-next, .swiper-rtl .swiper-button-prev{
            right: 0;
            transform: translateX(100%);
            margin-left: 30px;
        }
        .swiper-button-next svg, .swiper-button-prev svg{
            margin: 4px;
            background-color: transparent;
            border-radius: 12px;
        }
        .swiper-button-next svg:hover, .swiper-button-prev svg:hover{
            background-color: rgba(255, 255, 255, 0.08);
        }
        `,
    ],
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 32,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 32,
        },
    },
};

export default swiperParams;
