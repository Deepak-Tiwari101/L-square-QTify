import React, { useEffect, useState } from 'react'
import styles from './Carousel.module.css'
import { ReactComponent as RightArrow } from '../../assets/RightArrowSVG.svg'
import { useSwiper } from 'swiper/react'

export default function CarouselRightNav() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        const handleSlideChange = () => {
            setIsEnd(swiper.isEnd);
        };
        swiper.on('slideChange', handleSlideChange);

        // Cleanup function
        return () => {
            swiper.off('slideChange', handleSlideChange);
        };
    }, [swiper])
    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    )
}