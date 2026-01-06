
const StoreSkeleton = () => {
    return (
        <div className="w-full animate-pulse">

            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="h-6 w-48 bg-gray-300 rounded-md" />
                <div className="h-4 w-16 bg-gray-300 rounded-md" />
            </div>

            {/* Grid */}
            <div className="mt-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-x-5 gap-y-8">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-full shadow flex flex-col bg-card rounded-2xl overflow-hidden"
                    >
                        {/* Image skeleton */}
                        <div className="w-full h-44 bg-gray-300 relative">
                            {/* Rating pill */}
                            <div className="absolute left-2 top-2 h-5 w-14 bg-gray-200 rounded-2xl" />
                            {/* Time pill */}
                            <div className="absolute right-2 bottom-2 h-5 w-12 bg-gray-200 rounded-2xl" />
                        </div>

                        {/* Content */}
                        <div className="px-5 py-4 flex flex-col flex-1 gap-2">
                            {/* Name + badge */}
                            <div className="flex justify-between items-center">
                                <div className="h-5 w-32 bg-gray-300 rounded-md" />
                                <div className="h-5 w-16 bg-gray-200 rounded-2xl" />
                            </div>

                            {/* Categories */}
                            <div className="h-4 w-40 bg-gray-300 rounded-md" />

                            {/* Footer */}
                            <div className="flex items-center gap-2 mt-auto">
                                <div className="h-5 w-5 bg-gray-300 rounded-full" />
                                <div className="h-4 w-20 bg-gray-300 rounded-md" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default StoreSkeleton;
