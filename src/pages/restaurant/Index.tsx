import {ArrowRight, Clock, Dot, Flame, Heart, Info, Minus, Plus, Star} from "lucide-react";

const Index = () => {
    return (
        <div className="px-40">
            <div className="flex text-sm gap-6 text-dark/80 mt-12">
                <div className="">Home</div>
                <span>{">"}</span>
                <div className="">Restaurants</div>
                <span>{">"}</span>
                <div className="font-semibold">Burger King</div>
            </div>
            <div className="mt-5">
                <div>
                    <section className="relative flex w-full flex-col">
                        <div className="hero-restaurant-2">
                            <div className="overlay" />
                            <div className="relative px-8 flex flex-col gap-3 h-full py-6 justify-end text-white z-10">
                                <h4 className="text-6xl font-extrabold">Burger King</h4>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 font-semibold">
                                        <Star fill="#FACC15" size={15} strokeWidth={0}/>
                                        <span className="text-[#FACC15] text-sm">4.8(500+)</span>
                                    </div>
                                    <Dot size={15}/>
                                    <div className="flex items-center gap-0.5">
                                        <Clock size={15} className=""/>
                                        <p className="text-sm">20 - 30 mins</p>
                                    </div>
                                    <Dot size={15}/>
                                    <p className="text-sm">American, Fast Foods, Burgers</p>
                                </div>
                                <div className="flex items-center justify-between gap-1">
                                    <p className="text-gray-200">Known for flame-grilled burgers, fresh ingredients, and bold flavors, Enjoy our signature Whoopers and crispy fries.</p>
                                    <div className="flex gap-4">
                                        <button className="glass-frosted py-3 px-6 rounded-3xl flex gap-3">
                                            <Info/>
                                            Info
                                        </button>
                                        <button className="bg-primary py-3 px-6 rounded-3xl flex gap-3">
                                            <Heart/>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="grid grid-cols-8 gap-10 mt-10">
                <div className="col-span-5">
                    <div className="flex gap-5 items-center">
                        <button className="px-3.5 bg-primary py-1.5 rounded-2xl
                     text-sm font-semibold text-white flex gap-2 items-center">
                            Popular
                        </button>
                        <button className="px-3.5 bg-transparent py-1.5 rounded-2xl
                     text-sm font-semibold text-dark shadow flex gap-2 items-center">
                            Burger
                        </button>
                        <button className="px-3.5 bg-transparent py-1.5 rounded-2xl
                     text-sm font-semibold text-dark shadow flex gap-2 items-center">
                            Pizza
                        </button>
                        <button className="px-3.5 bg-transparent py-1.5 rounded-2xl
                     text-sm font-semibold text-dark shadow flex gap-2 items-center">
                            Chicken
                        </button>
                        <button className="px-3.5 bg-transparent py-1.5 rounded-2xl
                     text-sm font-semibold text-dark shadow flex gap-2 items-center">
                            Drinks
                        </button>
                    </div>
                    <div className="border-b border-gray-200/60 w-7/8 mx-auto my-7"></div>
                    <div className="flex gap-3 items-center mb-10">
                        <Flame className="text-primary" strokeWidth={4}/>
                        <span className="text-2xl font-bold">Popular Items</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4 rounded-3xl px-5 py-4 bg-white">
                            <img src="/assets/images/food/food.jpg" className="rounded-4xl h-[245px] aspect-auto" alt=""/>
                            <div className="flex justify-between text-lg font-bold mt-2">
                                <h5 className="">Double Pancake Cheese</h5>
                                <p className="text-primary">$12.50</p>
                            </div>
                            <p className="text-sm text-dark/90 font-semibold">Two flame-grilled beef patties topped with juicy tomatoes, fresh...</p>
                            <button className="bg-dark/10 text-dark px-8 py-3 flex gap-1 items-center text-center rounded-3xl w-7/8 justify-center text-sm font-bold mx-auto cursor-pointer">
                                <Plus size={19}/>
                                Add to Order
                            </button>
                        </div>
                        <div className="flex flex-col gap-4 rounded-3xl px-5 py-4 bg-white">
                            <img src="/assets/images/food/food2.jpg" className="rounded-4xl h-[245px] aspect-auto" alt=""/>
                            <div className="flex justify-between text-lg font-bold mt-2">
                                <h5 className="">Italian Noodles</h5>
                                <p className="text-primary">$8.89</p>
                            </div>
                            <p className="text-sm text-dark/90 font-semibold">Two flame-grilled beef patties topped with juicy tomatoes, fresh...</p>
                            <button className="bg-gray-100 text-dark flex gap-1 items-center text-center rounded-3xl w-7/8 justify-between text-sm font-bold mx-auto">
                                <span className="bg-gray-200 rounded-full p-2.5 cursor-pointer">
                                <Minus className=""/>
                                </span>
                                1
                                <span className="bg-primary text-white rounded-full p-2.5 cursor-pointer">
                                <Plus className=""/>
                                </span>
                            </button>
                        </div>

                    </div>

                </div>
                <div className="col-span-3">
                    <div className="shadow bg-white h-auto px-8 py-6 rounded-2xl">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-lg">Your Order</h3>
                            <p className="px-3.5 bg-transparent py-1.5 rounded-2xl self-start
                                text-sm font-semibold text-dark shadow flex gap-2 items-center">
                                3 items
                            </p>
                        </div>
                        <div className="border-b border-gray-200/60 w-7/8 mx-auto mt-2"></div>
                        <div className="flex gap-3 mt-4">
                            <img src="/assets/images/restaurants/restaurant12.jpg" className="w-20 h-20 rounded-full" alt=""/>
                            <div className="flex flex-col">
                                <h5 className="font-bold text-sm">Chicken Sandwich(3pc)</h5>
                                <p className="font-semibold text-xs text-dark/80">Garlic Sauce</p>
                                <div className="px-3.5 bg-transparent py-1.5 rounded-2xl self-start
                                text-sm font-semibold text-dark shadow flex gap-4 items-center mt-1.5">
                                    <button className="cursor-pointer"><Minus size={15}/></button>
                                    <span className="text-sm">1</span>
                                    <button className="cursor-pointer"><Plus className="text-dark" strokeWidth={3} size={15}/></button>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-4">
                            <img src="/assets/images/restaurants/restaurant2.jpg" className="w-20 h-20 rounded-full" alt=""/>
                            <div className="flex flex-col">
                                <h5 className="font-bold text-sm">Chicken Sandwich(3pc)</h5>
                                <p className="font-semibold text-xs text-dark/80">Garlic Sauce</p>
                                <div className="px-3.5 bg-transparent py-1.5 rounded-2xl self-start
                                text-sm font-semibold text-dark shadow flex gap-4 items-center mt-1.5">
                                    <button className="cursor-pointer"><Minus className="text-dark" strokeWidth={3} size={15}/></button>
                                    <span className="text-sm">2</span>
                                    <button className="cursor-pointer"><Plus className="text-dark" strokeWidth={3} size={15}/></button>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-gray-200/60 w-7/8 mx-auto my-4"></div>
                        <div className="flex justify-between items-center text-sm text-dark/80 font-semibold">
                            <p>Subtotal</p>
                            <p>$20.79</p>
                        </div>
                        <div className="flex justify-between items-center text-sm text-dark/80 font-semibold space-y-3">
                            <p>Delivery Fee</p>
                            <p>$2.29</p>
                        </div>
                        <div className="flex justify-between items-center text-lg mt-3.5 font-bold">
                            <p>Total</p>
                            <p className="text-primary">$23.08</p>
                        </div>
                        <div className="flex mx-auto justify-between py-3 rounded-3xl px-4 bg-primary text-white items-center text-sm mt-3.5 font-bold">
                            <span>Checkout</span>
                            <ArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
