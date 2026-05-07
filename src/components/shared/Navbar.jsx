"use client"

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Skeleton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {

    const router = useRouter();
    const { data, isPending } = authClient.useSession();
    const user = data?.user;


    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/auth/signin"); // redirect to login page
                },
            },
        });
    }


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
                        <Link href={"/profile"}>Profile</Link>
                    </li>
                </ul>

                <div>
                    {isPending ?

                        <div className="flex items-center gap-3">
                            <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-3 w-36 rounded-lg" />
                                <Skeleton className="h-3 w-24 rounded-lg" />
                            </div>
                        </div>
                        :
                        !user ? <ul className="flex items-center gap-5 text-sm">
                            <li>
                                <Link href={"/auth/signup"}>SignUp</Link>
                            </li>
                            <li>
                                <Link href={"/auth/signin"}>SignIn</Link>
                            </li>

                        </ul>

                            :
                            <div className="flex justify-center items-center gap-3">
                                <Avatar className="size-8">
                                    <Avatar.Image
                                        alt={user?.name}
                                        src={user?.image} referrerPolicy="no-referrer" />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                                <Button onClick={handleSignOut}
                                    variant="danger">Logout</Button>
                            </div>}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;