"use client";

import Image from "next/image";
import logo from '../assets/logo.png'
import { useRouter } from 'next/navigation'
import Link from "next/link";

const Header = () => {
    const router = useRouter();

    const handleRoute = () => {
        router.push("/")
    }

    return (
        <div className=" flex justify-between items-center py-4 px-14 bg-white shadow-lg ">
            <div onClick={handleRoute}>
                <Image width="200" height="150" className="  md:block cursor-pointer " src={logo} alt="Logo" />
            </div>
            <div>
                <ul className=" flex justify-center items-center gap-6">
                    <li className=" text-black hover:text-orange-800 hover:cursor-pointer transition-all hover:translate-x-0 hover:text-bold hidden md:block  ">
                        <Link href={'/'}>
                            Home
                        </Link>
                    </li>
                    <li className=" text-black hover:text-orange-800 hover:cursor-pointer transition-all hover:translate-x-0 hover:text-bold hidden md:block  ">Product</li>
                    <li className=" text-black hover:text-orange-800 hover:cursor-pointer transition-all hover:translate-x-0 hover:text-bold hidden md:block  ">Category</li>
                    <li className=" text-black hover:text-orange-800 hover:cursor-pointer transition-all hover:translate-x-0 hover:text-bold hidden md:block  ">About</li>
                    <li className=" text-black hover:text-orange-800 hover:cursor-pointer transition-all hover:translate-x-0 hover:text-bold hidden md:block  ">Contact</li>
                </ul>
            </div>
            <div>
                <ul className=" flex justify-center items-center gap-6">
                    <li className=" 
                        text-black 
                      hover:text-orange-800 
                        hover:cursor-pointer 
                        transition-all 
                        hover:translate-x-0 
                        hover:text-bold  
                        md:block  ">
                        Cart
                    </li>
                    <li className=" text-black hover:text-orange-800 hover:cursor-pointer transition-all hover:translate-x-0 hover:text-bold hidden md:block  ">Man</li>
                </ul>
            </div>
        </div>
    );
}
 
export default Header;