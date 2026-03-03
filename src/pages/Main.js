import MainSlide from "../components/MainSlide";
import HotKeyword from "../components/HotKeyword";
import PromotionBanner from "../components/PromotionBanner";
import TechLife from "../components/TechLife";
import MagazineBanner from "../components/MagazineBanner";

function Main() {
  return (
    <div>
      <MainSlide />
      <HotKeyword />
      <PromotionBanner />
      <MagazineBanner />
      <TechLife />
    </div>
  );
}

export default Main;
