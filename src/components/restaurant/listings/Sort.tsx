import {useState} from "react";
import {BarChart} from "lucide-react";

const Sort = () => {
    const [selected, setSelected] = useState('recommended');
    const options = [
        { id: 'recommended', label: 'Recommended' },
        { id: 'topRated', label: 'Top Rated' },
        { id: 'fastestDelivery', label: 'Fastest Delivery' }
    ];
    return (
        <div className="flex flex-col gap-3 bg-white px-4 py-5 rounded-2xl shadow">
            <div className="flex items-center gap-2">
                <BarChart fill="#16A34A"  size={20} />
                <p className="text-lg font-bold">Sort By</p>
            </div>
            <div className="space-y-3">
                {options.map((option) => (
                    <label
                        key={option.id}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <div className="relative flex items-center justify-center">
                            <input
                                type="radio"
                                name="sortOption"
                                value={option.id}
                                checked={selected === option.id}
                                onChange={(e) => setSelected(e.target.value)}
                                className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full cursor-pointer checked:border-primary checked:border-[6px] transition-all"
                            />
                        </div>
                        <span className="text-gray-700 text-sm font-medium">
                {option.label}
              </span>
                    </label>
                ))}
            </div>

        </div>

    );
};

export default Sort;
