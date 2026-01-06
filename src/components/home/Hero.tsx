import {Search} from "lucide-react";

const Hero = () => {
    return (
        <div>
            <section className="relative flex w-full flex-col px-4 py-6 md:px-10 lg:px-20 lg:py-10">
                <div className="hero">
                    <div className="overlay" />
                    <div className="relative px-6 flex flex-col h-full justify-center items-center text-center text-white z-10">
                        <h1 className="text-6xl font-extrabold">Delicious food,<br/> delivered to your door.</h1>
                        <p className="italic font-serif mt-5">Enter your address to find local favorites and hidden gems nearby.</p>
                        <div className="relative w-2/5 mt-5 md:block hidden">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Search size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full py-2.5 px-12 text-sm font-medium text-dark bg-white placeholder:text-dark rounded-2xl focus:outline-none placeholder:text-sm"
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                                <button className="border-transparent border bg-dark text-background font-semibold
                    text-sm px-6 py-1.5 rounded-2xl cursor-pointer">
                                    Find Food
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
