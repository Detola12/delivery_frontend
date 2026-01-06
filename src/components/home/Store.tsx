import {Star, Truck} from "lucide-react";
import {restaurants} from "../../data/restaurants.ts";
import {useEffect, useState} from "react";

const Store = () => {
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        const updateLimit = () => {
            const width =  window.innerWidth;
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
            <div className="flex justify-between items-center">
                <h2 className="heading-responsive font-bold">Popular near you</h2>
                <a href="" className="text-sm">See More</a>
            </div>
            <div className=" mt-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-x-5 gap-y-8">
                {
                    restaurants.slice(0, limit).map((restaurant) => {
                        return (
                            <div className="w-full shadow relative flex flex-col bg-card rounded-2xl transition hover:scale-105 ease-in-out duration-300">
                                <div className="absolute flex items-center gap-1 left-2 top-2 bg-white/90 font-semibold text-xs px-[6px] py-[3px] rounded-2xl">
                                    <Star fill="#FACC15" size={15} strokeWidth={0}/>
                                    {restaurant.rating}(500+)
                                </div>
                                <div className="absolute flex items-center gap-1 right-2 bottom-28 bg-white/90 font-semibold text-xs px-[6px] py-[3px] rounded-2xl">
                                    {restaurant.deliveryTime}
                                </div>
                                <img className="w-full h-44 rounded-t-2xl object-cover"
                                     src={restaurant.image} alt={restaurant.name}/>
                                <div className="px-5 py-4 flex flex-col flex-1">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold text-lg">{restaurant.name}</p>
                                        <div className="bg-green-200 text-dark font-semibold text-xs px-[6px] py-[3px] rounded-2xl">
                                            Open Now
                                        </div>
                                    </div>
                                    <p className="text-sm italic text-gray-600">{restaurant.categories}</p>
                                    <div className="flex items-center gap-2 text-sm mt-auto ">
                                        <Truck fill="#16A34A" size={18} strokeWidth={0} />
                                        <p className="text-xs">{restaurant.deliveryPrice}</p>
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

export default Store;
