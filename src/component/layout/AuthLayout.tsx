import React from "react";
import { Outlet } from "react-router-dom";
import './layout.css'
import { IoHome, IoNotificationsSharp } from 'react-icons/io5'
import { RiSettings5Fill } from 'react-icons/ri'
import { GradientButton } from "../Buttons/RoundedButton";
import { currencyFormat } from "../../core/utils/currencyFormat";
import Avatar from '../../assets/images/avatar.png'
// import { Footer } from "../../components/footer";
// import { Navbar } from "../../components/navbar";
// import { MobileNavbar } from "../../components/navbar/MobileNav";

export const AuthLayout = () => {
    return (
        <div className="h-screen w-full overflow-y-hidden">
            <div className="w-full layout-heading flex align-middle absolute top-0 left-0 ">
                <div className="w-11/12 flex  justify-between my-auto">
                    <p className="logo py-0 text-4xl my-auto text-left w-fit ">NCHORO WEALTH</p>
                    <div className="flex align-middle my-auto space-x-6">
                        <div className="bg-[#E3B505] my-auto text-[#A530ED] cursor-pointer p-1 rounded-md h-fit">
                            <IoHome className=' text-2xl' />
                        </div>
                        <RiSettings5Fill className='my-auto text-[#A530ED] cursor-pointer  text-2xl' />
                        <IoNotificationsSharp className='my-auto text-[#A530ED] cursor-pointer  text-2xl' />
                        <div className=" khand-subtitle text-xl my-auto max-h-fit p-0 flex justify-between align-middle">
                            <div className="my-auto text-[1.625rem] font-medium te">{currencyFormat(100000)}</div>
                            <div className="bg-[#31024E] rounded-md ml-10"><img className="h-12" src={Avatar} /></div>
                            {/* <GradientButton label={"LOGIN"} bg="bg-[#fff]" action={() => null} /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 overflow-y-scroll pt-5 pb-20 h-screen w-[99.8vw]">
                <Outlet />
            </div>
            {/* <Footer/> */}
        </div>
    )
}