import React, { useEffect, useState } from 'react'
import styles from './Carousel.module.css'
import { ReactComponent as LeftArrow } from '../../assets/LeftArrowSVG.svg'
import { useSwiper } from 'swiper/react'

export default function CarouselLeftNav() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);

    useEffect(() => {
        const handleSlideChange = () => {
            setIsBeginning(swiper.isBeginning);
        };

        swiper.on('slideChange', handleSlideChange);

        // Cleanup function
        return () => {
            swiper.off('slideChange', handleSlideChange);
        };
    }, [swiper]);

    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    )
}
