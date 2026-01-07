const PriceRange = () => {
    return (
        <div className="flex flex-col gap-3 bg-white px-4 py-5 rounded-2xl shadow">
            <h4 className="font-bold text-lg">Price Range</h4>
            <div className="flex justify-between">
                <div className="border hover:bg-primary hover:text-white px-5 py-0.5 rounded-full">$</div>
                <div className="border hover:bg-primary hover:text-white px-5 py-0.5 rounded-full">$</div>
                <div className="border hover:bg-primary hover:text-white px-5 py-0.5 rounded-full">$</div>
                <div className="border hover:bg-primary hover:text-white px-5 py-0.5 rounded-full">$</div>
            </div>
        </div>
    );
};

export default PriceRange;
