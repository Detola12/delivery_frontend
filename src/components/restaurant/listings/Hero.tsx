const Hero = () => {
    return (
        <div>
            <section className="relative flex w-full flex-col">
                <div className="hero-restaurant">
                    <div className="overlay" />
                    <div className="relative px-8 flex flex-col gap-3 h-full justify-center text-white z-10">
                        <p className="px-3 bg-primary py-0.5 rounded-2xl self-start text-sm font-semibold">Deal of the day</p>
                        <h1 className="text-6xl font-extrabold">50% off on all<br/> Italian Pizza</h1>
                        <p className="italic font-serif mt-2">Valid until midnight. Don't miss out</p>
                        <button className="bg-white self-start rounded-4xl py-3 px-6 text-dark font-bold">
                            Order Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
