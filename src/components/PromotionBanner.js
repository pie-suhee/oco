import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import ProductItem from "./ProductItem";

import prevBtnImg from '../assets/img/mainSlide/prev_btn.png';
import nextBtnImg from '../assets/img/mainSlide/next_btn.png';
import image1 from '../assets/img/promotionBanner/image_1.jpg';
import image2 from '../assets/img/promotionBanner/image_2.jpg';
import image3 from '../assets/img/promotionBanner/image_3.jpg';
import image4 from '../assets/img/promotionBanner/image_4.jpg';

import styles from "../style/PromotionBanner.module.scss"

const PromotionBanner = () => {

    const promotionData = [
        {
            id: 1,
            imgSrc: image1,
            brandName: "POLO RALPH LAUREN",
            title: "F/W 베스트셀러 모음전",
            products: [
                { pid: "6439394", brand: "폴로랄프로렌", name: "폴로 랄프로렌 남성 피마코튼 긴팔 무지니트", price: "109,000", discount: "61%", imgSrc: image2 },
                { pid: "6439395", brand: "폴로랄프로렌", name: "[1+1]폴로 랄프로렌 클래식핏 스탠다드 롱슬리브 긴팔 티셔츠", price: "71,900", discount: "70%", imgSrc: image3 },
                { pid: "6439396", brand: "폴로랄프로렌", name: "폴로랄프로렌 케이블니트 코튼 스웨터 (3종1택)", price: "68,900", discount: "73%", imgSrc: image4 },
                // ...나머지 상품 데이터
            ]
        },
        {
            id: 1,
            imgSrc: image1,
            brandName: "POLO RALPH LAUREN",
            title: "F/W 베스트셀러 모음전",
            products: [
                { pid: "6439397", brand: "폴로랄프로렌", name: "폴로 랄프로렌 남성 피마코튼 긴팔 무지니트", price: "109,000", discount: "61%", imgSrc: image2 },
                { pid: "6439398", brand: "폴로랄프로렌", name: "[1+1]폴로 랄프로렌 클래식핏 스탠다드 롱슬리브 긴팔 티셔츠", price: "71,900", discount: "70%", imgSrc: image3 },
                { pid: "6439399", brand: "폴로랄프로렌", name: "폴로랄프로렌 케이블니트 코튼 스웨터 (3종1택)", price: "68,900", discount: "73%", imgSrc: image4 },
                // ...나머지 상품 데이터
            ]
        },
    ];

    return (
        <section data-comment="PromotionBanner" className={styles.sectionWrap}>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                speed={1000}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                    el: '.swiper-pagination-custom',
                    clickable: true,
                    type: 'bullets',
                }}
                className={`default-swiper ${styles.PromotionBannerSwiper}`}
            >
                {promotionData.map((promo) => (
                    <SwiperSlide key={promo.id} className={styles.slideItem}>
                        <div className={styles.promotionBannerList}>
                            {/* 브랜드 배너 영역 */}
                            <div className={styles.brandBanner}>
                                <div className={styles.imageWrap}>
                                    <img src={promo.imgSrc} alt={promo.brandName} />
                                </div>
                                
                                <div className={styles.content}>
                                    <span className={styles.brand}>{promo.brandName}</span>
                                    <h3 className={styles.title}>{promo.title}</h3>
                                </div>
                            </div>

                            {/* 상품 그리드 영역 */}
                            <div className={styles.productGrid}>
                                {promo.products.map((product) => (
                                    <ProductItem key={product.pid} {...product} />
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div className={styles.controllerWrap}>
                    <div className={styles.paginationArea}>
                        <div className="swiper-pagination-custom"></div>
                    </div>

                    <div className={styles.navButtonArea}>
                        <button className="swiper-button-prev-custom">
                            <img src={prevBtnImg} alt="이전" />
                        </button>
                        <button className="swiper-button-next-custom">
                            <img src={nextBtnImg} alt="다음" />
                        </button>
                    </div>
                </div>
            </Swiper>
        </section>
    );
}

export default PromotionBanner;