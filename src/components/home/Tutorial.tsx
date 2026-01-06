import {MapPinCheckInside, Sparkles, Spool} from "lucide-react";

const Tutorial = () => {
    return (
        <div>
            <div className="flex justify-center ">
                <h2 className="heading-responsive font-bold mb-4 md:mb-6">
                    Categories
                </h2>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col items-center justify-center px-4">
                    <div className="bg-primary/30 p-8 h-24 w-24 rounded-full">
                        <MapPinCheckInside fill={'#14532D'} strokeWidth={0} size={30}/>
                    </div>
                    <h2 className="mt-4 font-bold text-lg">1. Select location</h2>
                    <p className="text-sm mt-2 text-dark max-w-sm text-center">Enter your delivery address to see available restaurants nearby.</p>
                </div>
                <div className="flex flex-col items-center justify-center px-4">
                    <div className="bg-primary/30 p-8 h-24 w-24 rounded-full">
                        <Spool fill={'#14532D'} strokeWidth={0} size={30}/>
                    </div>
                    <h2 className="mt-4 font-bold text-lg">2. Choose Order</h2>
                    <p className="text-sm mt-2 text-dark max-w-sm text-center">Browse menus and add your favourite food to the cart.</p>
                </div>
                <div className="flex flex-col items-center justify-center px-4">
                    <div className="bg-primary/30 p-8 h-24 w-24 rounded-full">
                        <Sparkles fill={'#14532D'} strokeWidth={0} size={30}/>
                    </div>
                    <h2 className="mt-4 font-bold text-lg">3. Enjoy!</h2>
                    <p className="text-sm mt-2 text-dark max-w-sm text-center">Food is prepared and delivered to your door in minutes.</p>
                </div>
            </div>
        </div>
    );
};

export default Tutorial;
