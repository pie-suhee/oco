import { Swiper, SwiperSlide } from 'swiper/react';

import ProductItem from "./ProductItem";

import image1 from '../assets/img/techLife/image_1.jpg';
import image2 from '../assets/img/techLife/image_2.jpg';
import image3 from '../assets/img/techLife/image_3.jpg';

import styles from "../style/TechLife.module.scss"

const TechLife = () => {
    const techData = [
        { pid: "6439394", brand: "바이소품", name: "진짜 네잎클로버 행운의 생화 코팅 카드 책갈피 부적 합격 시험 코팅 FLC 감사카드 선물 투명 선물하기", price: "891", discount: "40%", imgSrc: image1 },
        { pid: "6439395", brand: "샤크닌자", name: "[샤크닌자] SHARK 무선청소기 클린 앤 엠티 BU3521KR", price: "479,000", discount: "31%", imgSrc: image2 },
        { pid: "6439396", brand: "에이스", name: "ace. 20인치 기내용 하드 캐리어 여행가방 40L 퍼니트-Z[041]", price: "275,940", discount: "37%", imgSrc: image3 },
    ];

    return (
        <section className={styles.techLife}>
            <h2 className={styles.title}>Tech & Life</h2>
            
            <Swiper
                spaceBetween={10}
                slidesPerView={2.2}
                className={styles.swiperContainer}
            >
                {techData.map((product) => (
                    <SwiperSlide key={product.pid} className={styles.swiperSlide}>
                        <div className={styles.slideList}>
                            <ProductItem {...product} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default TechLife;