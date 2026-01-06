const Banner = () => {
    return (<section className="w-full px-4 py-8 md:px-10 lg:px-20">
            <div className="mx-auto max-w-7xl">
                <div
                    className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-primary px-8 py-10 shadow-lg md:flex-row md:px-16">
                    <div className="absolute -right-20 -top-40 size-80 rounded-full bg-white/10"></div>
                    <div className="absolute -left-20 -bottom-40 size-80 rounded-full bg-white/10"></div>
                    <div className="relative z-10 flex max-w-lg flex-col gap-4 text-center md:text-left">
                        <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">Get 20% off your first
                            order!</h2>
                        <p className="text-lg font-medium text-orange-100">Use code <span
                            className="rounded-lg bg-white/20 px-2 py-1 font-bold tracking-wider text-white">YUMMY20</span> at
                            checkout. Valid on orders over $30.</p>
                    </div>
                    <div className="relative z-10 flex shrink-0">
                        <button
                            className="rounded-full bg-white px-8 py-4 text-lg font-bold text-primary shadow-md transition-transform hover:scale-105 hover:bg-gray-50">
                            Claim Offer
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
