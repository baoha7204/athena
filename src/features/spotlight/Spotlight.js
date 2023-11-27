import { Typography } from '@material-tailwind/react';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from 'swiper/element/bundle';
import SlideItem from '~/components/SlideItem';
import config from '~/config';
import { isLoadingSpotlights, loadSpotlights, selectSpotlights } from './spotlightSlice';

register();

function Spotlight() {
    const dispatch = useDispatch();
    const spotlights = useSelector(selectSpotlights);
    const isSpotlightLoading = useSelector(isLoadingSpotlights);
    const swiperElRef = useRef(null);

    useEffect(() => {
        Object.assign(swiperElRef.current, config.swiper);
        swiperElRef.current.initialize();
    }, [spotlights]);
    useEffect(() => {
        dispatch(loadSpotlights());
    }, []);

    return (
        <div>
            <Typography variant="h1" color="white" className="mb-8">
                Spotlight
            </Typography>
            {!isSpotlightLoading && (
                <swiper-container ref={swiperElRef} init="false">
                    {spotlights?.map((spotlight) => (
                        <SlideItem data={spotlight} />
                    ))}
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </swiper-container>
            )}
        </div>
    );
}

export default Spotlight;
