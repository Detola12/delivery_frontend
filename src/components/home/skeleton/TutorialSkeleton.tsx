const TutorialSkeleton = () => {
    return (
        <div className="w-full animate-pulse">

            {/* Title */}
            <div className="flex justify-center mb-4 md:mb-6">
                <div className="h-6 w-40 bg-gray-300 rounded-md" />
            </div>

            {/* Steps */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center px-4 text-center"
                    >
                        {/* Icon circle */}
                        <div className="h-24 w-24 rounded-full bg-gray-300" />

                        {/* Step title */}
                        <div className="mt-4 h-5 w-36 bg-gray-300 rounded-md" />

                        {/* Description */}
                        <div className="mt-2 space-y-2 max-w-sm w-full">
                            <div className="h-4 w-full bg-gray-300 rounded-md" />
                            <div className="h-4 w-5/6 bg-gray-300 rounded-md mx-auto" />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default TutorialSkeleton;
