
const BannerSkeleton = () => {
    return (
        <section className="w-full px-4 py-8 md:px-10 lg:px-20">
            <div className="mx-auto max-w-7xl animate-pulse">
                <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-gray-300 px-8 py-10 shadow-lg md:flex-row md:px-16">

                    {/* Decorative circles */}
                    <div className="absolute -right-20 -top-40 size-80 rounded-full bg-white/20" />
                    <div className="absolute -left-20 -bottom-40 size-80 rounded-full bg-white/20" />

                    {/* Text content */}
                    <div className="relative z-10 flex max-w-lg flex-col gap-4 text-center md:text-left">
                        {/* Heading */}
                        <div className="h-8 w-72 rounded-lg bg-gray-200 md:h-10 md:w-96" />

                        {/* Paragraph lines */}
                        <div className="space-y-2">
                            <div className="h-5 w-full rounded-md bg-gray-200" />
                            <div className="h-5 w-5/6 rounded-md bg-gray-200" />
                        </div>
                    </div>

                    {/* Button */}
                    <div className="relative z-10 flex shrink-0">
                        <div className="h-14 w-40 rounded-full bg-gray-200" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BannerSkeleton;
