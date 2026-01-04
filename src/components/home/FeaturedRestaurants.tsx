import {Star} from "lucide-react";
import {restaurants} from "../../data/restaurants.ts";
import {useEffect, useState} from "react";

const FeaturedRestaurants = () => {
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        const updateLimit = () => {
            const width =  window.innerWidth;
            console.log(width);
            console.log(limit);
             if (width < 768) {
                setLimit(4);
            } else if (width < 1024) {
                setLimit(6);
            } else if (width < 1280) {
                setLimit(8);
            } else {
                setLimit(10);
            }
        }
        updateLimit();
        window.addEventListener('resize', updateLimit);
        return () => window.removeEventListener('resize', updateLimit);
    })
    return (
        <div>
            <h2 className="heading-responsive font-bold">Featured Restaurants</h2>
            <div className=" mt-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-x-5 gap-y-8">
                {
                    restaurants.slice(0, limit).map((restaurant) => {
                        return (
                            <div className="w-full flex flex-col bg-card rounded-2xl transition hover:scale-105 ease-in-out duration-300">
                                <img className="w-full h-44 rounded-t-2xl object-cover"
                                     src={restaurant.image} alt={restaurant.name}/>
                                <div className="px-5 py-4 flex flex-col flex-1">
                                    <p className="font-semibold text-lg">{restaurant.name}</p>
                                    <p className="text-sm italic text-gray-600">{restaurant.categories}</p>
                                    <div className="flex items-center justify-between text-sm mt-auto">
                                        {/* Star */}
                                        <div className="flex items-center gap-2">
                                            <Star fill="#FACC15" strokeWidth={0}/>
                                            <p className="">{restaurant.rating}</p>
                                        </div>
                                        {/* Delivery Time */}
                                        <div className="">
                                            {restaurant.deliveryTime}
                                        </div>
                                        {/* Pricing */}
                                        <div className="text-primary">
                                            {restaurant.deliveryPrice}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
};

export default FeaturedRestaurants;
