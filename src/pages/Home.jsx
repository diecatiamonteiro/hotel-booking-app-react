import "../styles/Home.css";
import HeroHomePage from "../components/HeroHomePage";
import HomePopularDestinations from "../components/HomePopularDestinations";
import HomeSpecialOffers from "../components/HomeSpecialOffers";

const Home = () => {
  return (
    <main>
      <HeroHomePage />
      <HomePopularDestinations />
      <HomeSpecialOffers />
    </main>
  );
};

export default Home;
