import {Search} from "lucide-react";

/*interface SearchInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
    className?: string;
    disabled?: boolean;
}*/

const SearchInput = () => {
    return (
        <div className="relative w-full">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={20} />
            </div>
            <input
                type="text"
                placeholder="Search"
                className="w-full py-2 px-12 text-sm font-medium text-dark
                 bg-dark/10 border-gray-200 rounded-2xl focus:outline-0
                  placeholder:text-dark"
            />
        </div>
    );
};

export default SearchInput;
