import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import prevBtnImg from '../assets/img/mainSlide/prev_btn.png';
import nextBtnImg from '../assets/img/mainSlide/next_btn.png';
import allViewIcon from '../assets/img/mainSlide/allview-icon.png';
import closeIcon from '../assets/img/mainSlide/close.png';

import styles from "../style/MainSlide.module.scss"

const bannerData = [
  {
    id: 1,
    img: "https://www.ocokorea.com/upload/images/widget/32/32897/20251217161418_3_02549.jpg",
    title: "LEDEPT",
    desc: "기본 니트 컬렉션\n시즌오프 SALE",
  },
  {
    id: 2,
    img: "https://www.ocokorea.com/upload/images/widget/32/32832/20251211105115_3_48720.png",
    title: "",
    desc: "",
  },
  {
    id: 3,
    img: "https://www.ocokorea.com/upload/images/widget/32/32952/20260205163443_3_41073.jpg",
    title: "OCO X DEUTERO",
    desc: "",
  },
];

const MainSlide = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.mainSlide}>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1.1}
                speed={1000}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                    el: '.swiper-pagination-custom',
                    type: 'fraction',
                }}
            >
                {bannerData.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className={styles.img_box}>
                            <img
                                src={banner.img}
                                alt="메인배너이미지"
                            />
                        </div>
                        
                        <div className={styles.text_box}>
                            <span className={styles.title}>{banner.title}</span>
                            <span className={styles.desc}>{banner.desc}</span>
                        </div>
                    </SwiperSlide>
                ))}

                <div className={styles.np_box}>
                    <div className={styles.nav_box}>
                        <button className="swiper-button-prev-custom">
                            <img src={prevBtnImg} alt="이전" />
                        </button>
                        <button className="swiper-button-next-custom">
                            <img src={nextBtnImg} alt="다음" />
                        </button>
                    </div>
                    
                    <div className={styles.pag_box}>
                        <div className="swiper-pagination-custom"></div>
                        
                        <div className={styles.more_box} onClick={() => setIsModalOpen(true)}>
                            <div className={styles.icon_box}>
                                <img src={allViewIcon} alt="더보기" />
                            </div>
                            <span>전체보기</span>
                        </div>
                    </div>
                </div>
            </Swiper>

            {isModalOpen && (
                <div className={styles.modalContainer}>
                    <div className={styles.modalHeader}>
                        <div className={styles.modalHeaderInner}>
                            <span className={styles.modalTitle}>
                                전체보기({bannerData.length})
                            </span>
                        </div>

                        <button 
                            className={styles.closeBtn}
                            onClick={() => setIsModalOpen(false)}
                        >
                            <img src={closeIcon} alt="닫기" />
                        </button>
                    </div>
                    
                    <div className={styles.modalContent}>
                        <div className={styles.bannerList}>
                            {bannerData.map((banner) => (
                                <a 
                                    key={banner.id}
                                    className={styles.modalBannerItem} 
                                    href={`../goods/event_view.do?bid=${banner.id}`}
                                >
                                    <div className={styles.modalImgBox}>
                                        <img src={banner.img} alt="메인배너이미지" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainSlide;