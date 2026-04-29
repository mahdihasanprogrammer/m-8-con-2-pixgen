"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="shadow">
            <nav className=" flex justify-center md:justify-between items-center  py-3 container mx-auto px-5 md:px-8 lg:px-12 flex-wrap gap-2">
                <div className="flex gap-2 items-center">
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        loading="eager"
                        width={30}
                        height={30}
                        className="object-cover h-auto w-auto"
                    />
                    <h3 className="font-black text-lg">PixGen</h3>
                </div>

                <ul className="flex items-center gap-5 text-sm flex-wrap">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/all-photos"}>All Photos</Link>
                    </li>
                    <li>
                        <Link href={"/pricing"}>Pricing</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>Profile</Link>
                    </li>
                </ul>

                <div>
                    <ul className="flex items-center gap-5 text-sm">
                        <li>
                            <Link href={"/signup"}>SignUp</Link>
                        </li>
                        <li>
                            <Link href={"/signin"}>SignIn</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;