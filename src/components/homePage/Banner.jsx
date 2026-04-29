import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="container mx-auto px-2 md:px-8 lg:px-12 py-5">
            <div className="bg-[url('https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg')] md:h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
                {/* Overlay */}
                <div className="w-full h-full rounded-lg bg-black/50 flex items-center px-5 py-8">
                    <div className="max-w-7xl mx-auto text-white">
                        <h1 className="text-3xl md:text-6xl font-bold mb-4 max-w-2xl">
                            Turn Ideas into Stunning AI Art
                        </h1>
                        <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
                            Generate high-quality images from simple text prompts.
                        </p>

                        <div className="flex gap-4">
                            <Link href="#">
                                <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500 py-2 px-4 rounded-full cursor-pointer">
                                    Generate Now
                                </Button>
                            </Link>

                            <Link href="/pricing">
                                <button className="text-white bg-transparent py-2 px-4 rounded-full border hover:bg-linear-to-r from-pink-500 via-purple-500 to-red-500 transition-all duration-500 hover:border-none cursor-pointer">
                                    View Pricing
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;