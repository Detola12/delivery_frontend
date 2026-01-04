
const Store = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold">Stores</h2>
            <div className="flex items-center gap-6 justify-around w-full h-full mt-6 mx-4">

                <a href="#" className="w-30 h-30 rounded-full
                            flex flex-col gap-2 items-center justify-center group ">
                    <img src="/src/assets/images/logos/store1.jpg" alt=""/>
                    <p>Cloth Store</p>
                </a>
                <a href="#" className="w-30 h-30 rounded-full
                            flex flex-col gap-2 items-center justify-center group ">
                    <img src="/src/assets/images/logos/store4.jpg" alt=""/>
                    <p>Happy Shop</p>
                </a>
                <a href="#" className="w-30 h-30 rounded-2xl
                            flex flex-col gap-2 items-center justify-center group ">
                    <img src="/src/assets/images/logos/store2.jpg" alt=""/>
                    <p>Shop Local</p>
                </a>
                <a href="#" className="w-30 h-30 rounded-2xl
                            flex flex-col gap-2 items-center justify-center group ">
                    <img src="/src/assets/images/logos/store1.jpg" alt=""/>
                    <p>Bar & Grill</p>
                </a>

            </div>
        </div>

    );
};

export default Store;
