import {categories} from "../../data/categories.ts";

const Category = () => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <h2 className="heading-responsive font-bold mb-4 md:mb-6">
                    Categories
                </h2>
                {/*<p className="text-sm">View</p>*/}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-3 md:gap-4 lg:gap-6">
                {categories.map((category, index) => (
                    <a
                        key={index}
                        href="#"
                        className="flex flex-col gap-2 items-center justify-center p-3 md:p-4"
                    >
                        <img src={category.image} className="rounded-full shadow-xl" alt={category.name}/>
                        <span className="text-xs md:text-sm text-center font-bold">
                            {category.name}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Category;