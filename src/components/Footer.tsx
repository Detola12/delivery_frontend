import {Facebook, Instagram} from "lucide-react";

const Footer = () => {
    return (
        <div className="bg-dark/5 py-10 mt-20 px-30">
            <div className="grid grid-cols-4 gap-5">
                <div className="flex flex-col gap-4">
                    <div className="font-semibold text-2xl">
                        Quick<span className="font-bold text-dark ">Eats</span>
                    </div>
                    <p className="text-xs text-dark font-semibold max-w-[200px]">Delicious meals delivered to your doorstep from the best restaurants near you.</p>
                </div>
                <div className="">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <div className="flex flex-col gap-3 text-sm text-dark">
                            <a href="">
                                About Us
                            </a>
                            <a href="">
                                Career
                            </a>
                            <a href="">
                                Partner with us
                            </a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">Support</h3>
                        <div className="flex flex-col gap-3 text-sm text-dark">
                            <a href="">
                                Help Center
                            </a>
                            <a href="">
                                Terms of Service
                            </a>
                            <a href="">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">Social</h3>
                        <div className="flex  gap-3 text-dark">
                            <Instagram/>
                            <Facebook/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-dark/20 mx-auto mt-10"></div>
            <p className="text-sm pt-8 text-dark">&copy; 2026 QuickEats Inc. All right reserved</p>
        </div>

    );
};

export default Footer;
