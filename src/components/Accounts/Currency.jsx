import { ArrowLeft, DollarSign, Euro, Moon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";
import Cedi from "../../../public/fa6-solid_cedi-sign.svg"

const Currency = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center  bg-white px-4 py-8">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className=" absolute gap-15 top-0 flex items-center mt-6">
                    <button className="mr-3 text-xl" onClick={() => navigate(-1)}>
                        <ArrowLeft />
                    </button>
                    <h1 className="text-lg font-semibold">Payment Currency</h1>
                </div>
            </div>

            <div className="w-full max-w-md mt-20 flex flex-col gap-10">
                <div className="flex flex-row gap-10 bg-[#F7F7F7] p-5 rounded-2xl">
                    <p className="text-[#2563EB] text-2xl"> ₦</p>
                    <p>Naira</p>
                </div>
                <div className="flex flex-row gap-10 bg-[#F7F7F7] p-5 rounded-2xl">
                    <img src={Cedi} alt="Cedi"  className="text-[#2563EB] text-2xl "  />
                    <p>Cedis</p>
                </div>
                <div className="flex flex-row gap-10 bg-[#F7F7F7] p-5 rounded-2xl">
                    <Euro className="text-[#2563EB] text-2xl" />
                    <p>Euro</p>
                </div>
                <div className="flex flex-row gap-10 bg-[#F7F7F7] p-5 rounded-2xl">
                    <DollarSign className="text-[#2563EB] text-2xl" />
                    <p>Dollars</p>
                </div>
            </div>
        </div>

    )
}
export default Currency 