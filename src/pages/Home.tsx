import Category from "../components/home/Category.tsx";
import Store from "../components/home/Store.tsx";
import FeaturedRestaurants from "../components/home/FeaturedRestaurants.tsx";

const Home = () => {
    return (
        <div className="mt-12 mx-20 sm:mx-8 gap-20 flex flex-col">
            <Category/>
            {/*<Store/>*/}
            <FeaturedRestaurants/>
        </div>
    );
};

export default Home;
