import { Typography } from '@material-tailwind/react';
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import SlideItem from '~/components/SlideItem';
import config from '~/config';

register();

function Spotlight() {
    const swiperElRef = useRef(null);

    useEffect(() => {
        Object.assign(swiperElRef.current, config.swiper);
        swiperElRef.current.initialize();
    }, []);

    return (
        <div>
            <Typography variant="h1" color="white" className="mb-8">
                Spotlight
            </Typography>
            <swiper-container ref={swiperElRef} init="false">
                <SlideItem />
                <SlideItem />
                <SlideItem />
                <SlideItem />
                <SlideItem />
                <SlideItem />
                <SlideItem />
                <SlideItem />
                <SlideItem />
                <SlideItem />
            </swiper-container>
        </div>
    );
}

export default Spotlight;
