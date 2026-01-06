const CategorySkeleton = () => {
    return (
        <div className="w-full animate-pulse">

            {/* Header */}
            <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="h-6 w-32 bg-gray-300 rounded-md" />
                <div className="h-4 w-10 bg-gray-300 rounded-md" />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-3 md:gap-4 lg:gap-6">
                {Array.from({ length: 9 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-2 items-center justify-center p-3 md:p-4"
                    >
                        {/* Circular image */}
                        <div className="h-16 w-16 md:h-20 md:w-20 bg-gray-300 rounded-full" />

                        {/* Label */}
                        <div className="h-3 w-14 bg-gray-300 rounded-md" />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CategorySkeleton;
