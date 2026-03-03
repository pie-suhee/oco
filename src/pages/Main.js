import MainSlide from "../components/MainSlide";
import HotKeyword from "../components/HotKeyword";
import PromotionBanner from "../components/PromotionBanner";
import SlideItems from "../components/SlideItems";
import TechLife from "../components/TechLife";
import MagazineBanner from "../components/MagazineBanner";

import styles from "../style/Main.module.scss"

// 실제 데이터 예시
const menProducts = [
  {
    id: 6451926,
    brand: "라코스테",
    name: "라코스테 레귤러핏 플리츠 기모 후드 SH2128 (3종1택)",
    price: "143,100",
    discount: "43%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/6451/6451926/Product_1764557759670_cache_300_300.jpg"
  },
  {
    id: 2859461,
    brand: "폴로랄프로렌",
    name: "폴로 랄프로렌 옥스포드 남성셔츠",
    price: "99,000",
    discount: "67%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/2859/2859461/Product_1730731359536_cache_300_300.jpg"
  },
  {
    id: 6280912,
    brand: "오조어",
    name: "[오조어] 웨스트 더비 슈즈 / 브라운",
    price: "88,290",
    discount: "60%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/6280/6280912/Product_1750154267396_cache_300_300.png"
  },
  {
    id: 6430329,
    brand: "브레노웰트",
    name: "윙클 워싱 블랙 스니커즈",
    price: "107,100",
    discount: "10%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/6430/6430329/Product_1753806637164_cache_300_300.jpg"
  },
  {
    id: 329448,
    brand: "애쉬아워",
    name: "Natural Wrinkles Essential Shirts Charcoal",
    price: "24,030",
    discount: "73%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/231/231278/Product_1683444079497_cache_300_300.jpg"
  },
  {
    id: 1181267,
    brand: "피아네르",
    name: "[2 PACK] 에센셜 세미 와이드 스웨트팬츠 (3color)",
    price: "41,310",
    discount: "48%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/1181/1181267/Product_1724251438302_cache_300_300.jpg"
  },
  {
    id: 5157007,
    brand: "폴로랄프로렌",
    name: "(1+1) 폴로 랄프로렌 베이직 커스텀 슬림핏 티셔츠",
    price: "71,010",
    discount: "58%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/5157/5157007/Product_1741072116178_cache_300_300.jpg"
  },
  {
    id: 4895964,
    brand: "아미",
    name: "AMI paris 아미 남여공용 스몰 하트 로고 패치 맨투맨 3컬러",
    price: "59,800",
    discount: "79%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/4895/4895964/Product_1739414177072_cache_300_300.jpg"
  },
  {
    id: 6437180,
    brand: "NTBC",
    name: "2Way 오버핏 후드 바람막이 (2COLOR)",
    price: "26,910",
    discount: "73%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/6437/6437180/Product_1758647428984_cache_300_300.jpg"
  },
  {
    id: 5887922,
    brand: "암피스트",
    name: "8AM Comfy Tailored Set-Up [Navy]",
    price: "138,024",
    discount: "28%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/5887/5887922/Product_1745898706698_cache_300_300.jpg"
  },
  {
    id: 264622,
    brand: "페이탈리즘",
    name: "#0999 BLACK WASHING WIDE FIT",
    price: "9,900",
    discount: "86%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/264/264622/Product_1696496441314_cache_300_300.jpg"
  },
  {
    id: 4888503,
    brand: "폴로 랄프로렌",
    name: "폴로 랄프로렌 커스텀 슬림핏 소프트코튼 라운드넥 반팔 티셔츠",
    price: "26,900",
    discount: "66%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/4888/4888503/Product_1739319335354_cache_300_300.jpg"
  },
  {
    id: 5127956,
    brand: "프린트스타",
    name: "[2APCK] 14수 7.4oz 헤비웨이트 라운드 오버핏 무지 반팔 티셔츠",
    price: "23,310",
    discount: "46%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/5127/5127956/Product_1741055917962_cache_300_300.jpg"
  },
  {
    id: 2066917,
    brand: "후크",
    name: "빈티지 워싱 네이비 체크셔츠",
    price: "39,510",
    discount: "56%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/2066/2066917/Product_1721698870832_cache_300_300.jpg"
  },
  {
    id: 4896308,
    brand: "아노블리어",
    name: "워렌 슬림 타이 3COLOR",
    price: "19,710",
    discount: "24%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/4896/4896308/Product_1739449592441_cache_300_300.jpg"
  }
    // ... 데이터를 추가하세요
];

const womenProducts = [
  {
    id: 6451705,
    brand: "타미힐피거",
    name: "[스크래치] 타미힐피거 폴로 칼하트 스크래치 모음전",
    price: "8,910",
    discount: "82%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/6451/6451705/Product_1765090642724_cache_300_300.jpg"
  },
  {
    id: 1888324,
    brand: "케이엔드",
    name: "나바호 터키석 비즈 팔찌",
    price: "22,230",
    discount: "42%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/1888/1888324/Product_1722146540602_cache_300_300.jpg"
  },
  {
    id: 237286,
    brand: "비치스앤크림",
    name: "HEALTH AND WELLNESS PIGMENT CAP-BLUE",
    price: "24,480",
    discount: "28%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/237/237286/Product_1685606039386_cache_300_300.jpg"
  },
  {
    id: 256644,
    brand: "로파이",
    name: "홀리데이 셔츠 (에버닌)",
    price: "45,000",
    discount: "40%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/256/256644/Product_1698646474111_cache_300_300.jpg"
  },
  {
    id: 6435490,
    brand: "폴리그램",
    name: "데일리 하찌 오버핏 라운드 니트 - 6COLOR",
    price: "19,710",
    discount: "53%",
    imgSrc: "https://www.ocokorea.com/upload/images/product/6435/6435490/Product_1762906950248_cache_300_300.jpg"
  },
  // ... 데이터를 추가하세요
];

function Main() {
  return (
    <div>
      <MainSlide />
      <HotKeyword />
      <PromotionBanner />
      <section className={styles.recommendation}>
        <div className={styles.sectionTitle}>RECOMMENDATION</div>
        <SlideItems categoryTitle="MEN" products={menProducts} />
        <SlideItems categoryTitle="WOMEN" products={womenProducts} />
      </section>
      <MagazineBanner />
      <TechLife />
    </div>
  );
}

export default Main;
