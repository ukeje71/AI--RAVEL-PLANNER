import { ArrowLeft } from "lucide-react";
import React from "react"
import { useNavigate } from "react-router"
import Card from "../UI/Card";
import ID from "../../../public/teenyicons_id-outline.svg"
import Visa from "../../../public/mage_visa.svg"
import Passport from "../../../public/solar_passport-bold.svg"
import Covid from "../../../public/arcticons_covidalert.svg"


const Documents = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center  bg-white px-4 py-8">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className=" absolute gap-15 top-0 flex items-center mt-6">
                    <button className="mr-3 text-xl" onClick={() => navigate(-1)}>
                        <ArrowLeft />
                    </button>
                    <h1 className="text-lg font-semibold">Travel Documents</h1>
                </div>
            </div>

            <div className="w-full max-w-md mt-20 flex flex-col gap-10">
                <div className="flex flex-row gap-10 bg-[#F7F7F7] p-5 rounded-2xl">
                    <img src={ID} alt="Identification Image" className="text-[#2563EB]" />
                    <p>National ID</p>
                </div>
                <div className="flex flex-row gap-10 bg-[#F7F7F7] p-5 rounded-2xl">
                    <img src={Visa} alt="Visa img" className="text-[#2563EB]" />
                    <p>Visa</p>
                </div>
                <div className="flex flex-row gap-10 bg-[#F7F7F7] p-5 rounded-2xl">
                    <img src={Passport} alt="Passport Img" />
                    <p>Euro</p>
                </div>
                <div className="flex flex-row gap-10 bg-[#F7F7F7] p-5 rounded-2xl">
                    <img src={Covid} alt="Covid Img" className="text-[#2563EB]" />
                    <p>Dollar Sign </p>
                </div>
            </div>
        </div>
    )
}
export default Documents