import HeroSlider from "../../components/hero_slider/HeroSlider";
import TrendingNow from "../../components/trending_now/TrendingNow";
function Home() {  
  document.title = "Home";
  return (
    <section>
      <HeroSlider />
      <TrendingNow/>
    </section>
  );
}

export default Home;
