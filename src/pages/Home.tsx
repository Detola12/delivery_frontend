import Hero from "../components/home/Hero.tsx";
import Category from "../components/home/Category.tsx";
import Store from "../components/home/Store.tsx";
import Banner from "../components/home/Banner.tsx";
import Tutorial from "../components/home/Tutorial.tsx";

const Home = () => {
    return (
        <div className="mt-12 mx-20 sm:mx-8 gap-20 flex flex-col">
            {/*    Hero     */}
            <Hero/>
            <Category/>
            <Store/>
            <Banner/>
            <Tutorial/>
        </div>
    );
};

export default Home;
