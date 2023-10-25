import React, {useRef, useState} from 'react';
// Import Swiper React components
// @ts-ignore
import {Swiper, SwiperProps, SwiperSlide} from 'swiper/react';
// @ts-ignore
import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import useBaseUrl from "@docusaurus/useBaseUrl";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "./index.module.css"


export default function App() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft: SwiperProps['onAutoplayTimeLeft'] = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                className={styles.swiper}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={useBaseUrl('/img/pages/home.png')}/>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={useBaseUrl('/img/pages/connection.png')}/>
                </SwiperSlide>
                <div className={styles.autoplayProgress} slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
