import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Scrollbar } from 'swiper/modules';

import ProductItem from './ProductItem';

import styles from "../style/SlideItems.module.scss"

const SlideItems = ({ categoryTitle, products = [] }) => {
    const scrollbarRef = useRef(null);
    const setInit = useState(false)[1];

    useEffect(() => {
        setInit(true);
    }, []);

    return (
        <article className={styles.slideItems}>
            <div className={styles.categoryTitle}>{categoryTitle}</div>

            <Swiper
                modules={[Grid, Scrollbar]}
                className={styles.swiperContainer}
                slidesPerView={2} 
                slidesPerGroup={2}
                spaceBetween={13}
                grid={{
                    rows: 2, 
                    fill: 'row'
                }}
                scrollbar={{
                    draggable: true,
                    el: scrollbarRef.current,
                }}
                onSwiper={(swiper) => {
                    if (scrollbarRef.current) {
                        swiper.params.scrollbar.el = scrollbarRef.current;
                        swiper.scrollbar.init();
                        swiper.scrollbar.updateSize();
                    }
                }}
                key={categoryTitle}
            >
                {products.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ProductItem 
                            brand={item.brand}
                            name={item.name}
                            price={item.price}
                            discount={item.discount}
                            imgSrc={item.imgSrc}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* 커스텀 스크롤바 위치 */}
            <div className={styles.scrollbarWrapper}>
                <div ref={scrollbarRef} className="swiper-scrollbar"></div>
            </div>
        </article>
    );
}

export default SlideItems;