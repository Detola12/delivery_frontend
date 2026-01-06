import {ShoppingCart} from "lucide-react";
import SearchInput from "./SearchInput.tsx";
import QuickAuth from "./auth/QuickAuth.tsx";

const Header = () => {
    return (
        <nav className="grid grid-cols-12 gap-6 items-center w-full pt-3 px-20 ">
            {/* Logo */}
            <div className="sm:col-span-5 md:col-span-5 lg:col-span-2 font-semibold text-2xl bounce-in-top">
                Quick<span className="font-bold text-dark ">Eats</span>
            </div>
            {/*    Search Bar   */}
            <div className="col-span-7 md:col-span-7 lg:col-span-6 xl:col-span-7">
                <SearchInput />
            </div>
            {/*    Cart     */}
            <div className="hidden md:hidden md:col-span-2 lg:col-span-4 xl:col-span-3 gap-4 lg:flex justify-center items-center">
                <ShoppingCart/>
                <QuickAuth/>
            </div>
        </nav>
    );
};

export default Header;
