import styles from "../style/Footer.module.scss"

import escrowIcon from '../assets/img/footer/escrow_icon.png';
import sns1Img from '../assets/img/footer/foot_sns1.png';
import sns2Img from '../assets/img/footer/foot_sns2.png';
import sns3Img from '../assets/img/footer/foot_sns3.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <ul className={styles.footerInfo}>
                    <li><button>로그인</button></li>
                    <li><button>PC버전</button></li>
                    <li><button>이용약관</button></li>
                    <li><button>개인정보처리방침</button></li>
                </ul>
                <ul className={styles.footerSns}>
                    <li><a href="https://www.facebook.com/ocokorea/"><img src={sns1Img} alt="OCO 페이스북" /></a></li>
                    <li><a href="https://www.instagram.com/ocokorea/"><img src={sns2Img} alt="OCO 인스타그램" /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCWu6dFs7tqc6rJ6W8r43DXw"><img src={sns3Img} alt="OCO 유튜브" /></a></li>
                </ul>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.footerBottom1}>
                    <div className={styles.companyInfo}>
                        <p>(주)오씨오    대표:김재규</p>
                        <div className={styles.bizInfoCheck}>
                            <span>사업자등록번호: 358-81-03400</span>
                            <button>사업자정보확인</button>
                        </div>
                        <p>통신판매업신고번호: 2024-서울용산-0878</p>
                    </div>
                    <div className={styles.escrowIcon}>
                        <a href="https://npg.nicepay.co.kr/issue/issueEscrow.do?Mid=ocokorea4m&CoNo=3588103400" target="_blank" rel="noopener noreferrer">
                            <img src={escrowIcon} alt="에스크로" />
                        </a>
                    </div>
                </div>

                <div className={styles.footerBottom2}>
                    <p>(주)OCO는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가 등록한 상품정보 및 거래에 대해 (주)OCO는 책임을 지지 않습니다.</p>
                    <div className={styles.emailWrap}>
                        <p>전자우편주소</p>
                        <a href="mailto:oco@ocokorea.com">oco@ocokorea.com</a>
                    </div>
                    <p>(AM 10:00 ~ PM 12:00, PM 01:00~05:00 주말, 공휴일 제외)</p>
                </div>

                <div className={styles.footerBottom3}>
                    <p className={styles.copyright}>COPYRIGHT © 2018 VIGEVANO. ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;