
const QuickAuth = () => {
    return (
        <div className="flex justify-end gap-4 items-center">
            <button className="border-slate-300 border font-semibold cursor-pointer text-dark
                    text-sm px-6 py-2 rounded-2xl hover:bg-primary hover:border-transparent hover:text-white">
                Login
            </button>
            <button className="border-transparent border bg-primary text-background font-semibold
                    text-sm px-6 py-2 rounded-2xl cursor-pointer">
                Sign Up
            </button>
        </div>
    );
};

export default QuickAuth;
