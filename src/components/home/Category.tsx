import {
    Baby,
    BottleWine,
    BriefcaseMedical,
    Hamburger,
    ScanFace,
    ShoppingBag,
    SoapDispenserDroplet,
    Store,
    Tag
} from "lucide-react";

const Category = () => {
    const categories = [
        {
            icon: Tag, name: "Offers"
        },
        {
            icon: Hamburger, name: "Snacks"
        },
        {
            icon: BottleWine, name: "Alcohol"
        },
        {
            icon: BriefcaseMedical, name: "Health"
        },
        {
            icon: SoapDispenserDroplet, name: "Personal Care"
        },
        {
            icon: ShoppingBag, name: "Grocery"
        },
        {
            icon: Baby, name: "Baby"
        },
        {
            icon: Store, name: "Retail"
        },
        {
            icon: ScanFace, name: "Beauty"
        },
    ]
    return (
        <div className="w-full">
            <h2 className="heading-responsive font-bold mb-4 md:mb-6">
                Categories
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-3 md:gap-4 lg:gap-6">
                {categories.map((category, index) => (
                    <a
                        key={index}
                        href="#"
                        className="aspect-square border border-dark/30 rounded-2xl flex flex-col gap-2 items-center justify-center group hover:bg-dark transition-colors p-3 md:p-4"
                    >
                        <category.icon
                            size={32}
                            className="text-dark/90 group-hover:text-white transition-colors md:w-10 md:h-10"
                        />
                        <span className="text-xs md:text-sm text-center text-dark/90 group-hover:text-white transition-colors">
                            {category.name}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Category;