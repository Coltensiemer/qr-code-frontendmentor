import React, { Fragment } from "react";
import Image from "/src/assets/images/image-qr-code.png"

export default function Main(){ 
    return (
        <div className=" bg-white container shadow-lg m-auto my-32 w-80 flex flex-col items-center gap-2 rounded-3xl">
        <img class="w-72 h-72 pt-4 px-4 rounded-t-3xl rounded-b-2xl" src={Image} alt="Scan Code"/>
        <h1 className="text-center font-outfit font-bold text-2xl top-50 pt-5 px-4"> Improve your front-end skills by building projects</h1>
        <p className="text-center text-slate-400 font-outfit font-normal color px-8 pb-10">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    )
}