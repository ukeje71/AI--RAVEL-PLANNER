import { ArrowLeft, KeyRound, Recycle } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router";
import Two from "../../../public/material-symbols-light_change-circle-outline-rounded.svg"


const Settings = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-white px-4 py-8">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className=" absolute gap-15 top-0 flex items-center mt-6">
                    <button className="mr-3 text-xl" onClick={() => navigate(-1)}>
                        <ArrowLeft />
                    </button>
                    <h1 className="text-lg font-semibold">Personal Information</h1>
                </div>
            </div>

            <div className="w-full max-w-md mt-20 flex flex-col gap-10">
                    <div className="flex flex-row gap-10 bg-[#F7F7F7] p-5 rounded-2xl">
                        <KeyRound className="text-[#2563EB]" />
                        <p>Password Change</p>
                    </div>
                <div className="flex flex-row gap-10 bg-[#F7F7F7] p-5 rounded-2xl">
                    <img src={Two} alt="Two factor Image " className="text-[#2563EB]" />
                    <p>Two factor Authenticator</p>
                </div>
            </div>
        </div>
    )
}
export default Settings