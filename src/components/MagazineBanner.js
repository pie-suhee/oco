import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '../assets/img/magazineBanner/image_1.png';
import image2 from '../assets/img/magazineBanner/image_2.png';
import image3 from '../assets/img/magazineBanner/image_3.png';

import styles from "../style/MagazineBanner.module.scss"

const MagazineBanner = () => {

    const magazineList = [
        { id: 16132, img: image1 },
        { id: 16013, img: image2 },
        { id: 15849, img: image3 },
        // 추가 데이터...
    ]

    return (
        <section className={styles.MagazineBanner}>
            <div className={styles.title}>OCO Magazine</div>
            <div className={styles.description}>
                OCO 입점 브랜드들의 특별한 이벤트와 <br /> 이야기를 만나보세요.
            </div>

            <Swiper
                className={styles.swiperContainer}
                slidesPerView={'auto'}
                spaceBetween={17}
                slidesOffsetBefore={0}
                loop={true}
            >
                {magazineList.map((item) => (
                    <SwiperSlide key={item.id} className={styles.slideItem}>
                        <a href="#!">
                            <div className={styles.imageWrapper}>
                                <img 
                                src={item.img} 
                                alt="메인배너이미지" 
                                loading="lazy" 
                                />
                            </div>
                        </a>
                        <div className={styles.textContent}>
                            <h3>NEW IN THIS WEEK</h3>
                            <p>
                                금주 신규입점 브랜드<br />
                                7일간 20% 쿠폰!
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.bgBottom}></div>
        </section>
    );
}

export default MagazineBanner;