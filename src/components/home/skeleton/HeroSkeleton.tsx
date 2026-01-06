export default function HeroSkeleton() {
    return (
        <section className="relative w-full px-4 py-6 md:px-10 lg:px-20 lg:py-10">
            <div className="relative h-[420px] rounded-2xl overflow-hidden bg-dark/50 dark:bg-dark/50 animate-pulse">
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark/40" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 space-y-6">

                    {/* Title skeleton */}
                    <div className="space-y-3">
                        <div className="h-10 w-[420px] bg-gray-300 rounded-lg mx-auto" />
                        <div className="h-10 w-[320px] bg-gray-300 rounded-lg mx-auto" />
                    </div>

                    {/* Subtitle skeleton */}
                    <div className="h-4 w-[380px] bg-gray-300 rounded-md" />

                    {/* Search bar skeleton */}
                    <div className="w-2/5 min-w-[300px]">
                        <div className="h-12 w-full bg-gray-300 rounded-2xl flex items-center justify-between px-4">
                            <div className="h-5 w-5 bg-gray-400 rounded-full" />
                            <div className="h-7 w-24 bg-gray-400 rounded-xl" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
