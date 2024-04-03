import React from "react";
import { Outlet } from "react-router-dom";
import './layout.css'
import { IoHome, IoNotificationsSharp } from 'react-icons/io5'
import { RiSettings5Fill } from 'react-icons/ri'
import { currencyFormat } from "../../core/utils/currencyFormat";
import Avatar from '../../assets/images/avatar.png'
import { BackIcon } from "../../assets/icons/back-icon";
import { ProfileList } from "./ProfileList";

export const ProfileLayout = () => {
    return (
        <div className="h-screen mt-44 w-[98vw]">
            <div className="w-full layout-heading flex align-middle fixed top-0 left-0 ">
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
            <div className="h-[20px] text-left text-white khand-subtitle flex justify-between w-11/12 mx-auto">
                <div className="text-[1.75rem] flex align-middle">
                    <div className="my-auto mr-3"><BackIcon/></div>
                    <div className="my-auto">PROFILE</div>
                </div>
                <h4 className="text-lg font-medium">Bal: {currencyFormat(10000)}</h4>
            </div>
            <div className="mt-8 w-11/12 mx-auto flex">
                <div className="lg:w-[25%] h-fit text-left mr-4 bg-white bg-opacity-10">
                   <ProfileList/>
                </div>
                <div className="bg-white w-full p-10 text-left rounded-md">
                    <Outlet />
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}