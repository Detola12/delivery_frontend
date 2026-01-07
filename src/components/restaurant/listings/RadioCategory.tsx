import {categories} from "../../../data/categories.ts";
import {useState} from "react";

const RadioCategory = () => {
    const [selected, setSelected] = useState(1);
    return (
        <div className="flex flex-col gap-3 bg-white px-4 py-5 rounded-2xl shadow">
            <h4 className="font-bold text-lg">Categories</h4>
            {categories.map((category) => {
                return (
                    <div>
                        <label className="flex justify-between items-center">
                            <span className="text-sm">{category.name}</span>
                            <input type="radio"
                                   key={category.id}
                                   value={category.id}
                                   checked={selected ===  category.id }
                                   className="accent-dark"
                                   onChange={(e) => setSelected(Number(e.target.value))}/>
                            {/*<p className="text-sm">{category.name}</p>*/}
                        </label>
                    </div>

                );
            })}
        </div>
    );
};

export default RadioCategory;
