import "../styles/Home.css";
import HeroHomePage from "../components/HeroHomePage";

const Home = () => {
  return (
    <main>
      <HeroHomePage />
      <div className="home-content">
        <h2>Discover Your Dream Vacation</h2>
        <p>Explore our wide range of accommodations and find the perfect place to stay for your next trip.</p>
      </div>
    </main>
  );
};

export default Home;
