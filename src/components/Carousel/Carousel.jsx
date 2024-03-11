import React, { useEffect } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import styles from './Carousel.module.css'
import CarouselLeftNav from './CarouselLeftNav'
import CarouselRightNav from './CarouselRightNav'

const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0, 400);
    }, [data, swiper]);
    return <></>
}

export default function Carousel({ data, renderComponent }) {
    return (
        <div className={styles.wrapper}>
            <Swiper
                modules={[Navigation]}
                style={{ padding: '0 20px' }}
                initialSlide={0}
                spaceBetween={40}
                slidesPerView={"auto"}
                allowTouchMove
            >
                <Controls data={data} />

                <CarouselLeftNav />
                <CarouselRightNav />

                {/* Loop through the children and wrap each one in a SwiperSlide */}
                {data.map((ele) =>
                (<SwiperSlide key={ele.id}>
                    {renderComponent(ele)}
                </SwiperSlide>)
                )}
            </Swiper>
        </div>

    )
}
