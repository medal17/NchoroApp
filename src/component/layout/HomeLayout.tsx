import React from "react";
import { Outlet } from "react-router-dom";
import './layout.css'
import { IoHome, IoNotificationsSharp } from 'react-icons/io5'
import { RiSettings5Fill } from 'react-icons/ri'
import { GradientButton, RoundedButton } from "../Buttons/RoundedButton";
// import { Footer } from "../../components/footer";
// import { Navbar } from "../../components/navbar";
// import { MobileNavbar } from "../../components/navbar/MobileNav";

export const HomeLayout = () => {
    return (
        <div className="h-full w-full ">
            <div className="w-full layout-heading flex align-middle absolute top-0 left-0 ">
                <div className="w-11/12 flex  justify-between my-auto">
                    <p className="logo py-0 text-4xl my-auto text-left w-fit ">NCHORO WEALTH</p>
                    <div className="flex align-middle my-auto space-x-6">
                        <div className="bg-[#E3B505] my-auto text-[#A530ED] cursor-pointer p-1 rounded-md h-fit">
                            <IoHome className=' text-2xl' />
                        </div>
                        <RiSettings5Fill className='my-auto text-[#A530ED] cursor-pointer  text-2xl' />
                        <IoNotificationsSharp className='my-auto text-[#A530ED] cursor-pointer  text-2xl' />
                        <div className="w-32 my-auto max-h-fit p-0 ">
                            <GradientButton label={"LOGIN"} bg="bg-[#fff]" action={() => null} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 ">
                <Outlet />
            </div>
            {/* <Footer/> */}
        </div>
    )
}