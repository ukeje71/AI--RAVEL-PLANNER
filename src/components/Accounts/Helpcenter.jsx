import { ArrowLeft, Plane, Search, SlidersHorizontal, User } from "lucide-react";
import React from "react"
import { useNavigate } from "react-router";
import Payment from "../../../public/Group.svg"
import Inqury from "../../../public/mdi_faq.svg"
import Documents from "../../../public/fluent-mdl2_reservation-orders.svg"
import Support from "../../../public/icons8_support.svg"

const Helpcenter = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center justify-star bg-white px-4 py-8">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className=" absolute gap-15 top-0 flex items-center mt-6">
                    <button className="mr-3 text-xl" onClick={() => navigate(-1)}>
                        <ArrowLeft />
                    </button>
                    <h1 className="text-lg font-semibold">Help Cantre</h1>
                </div>
            </div>
            <section className="w-full max-w-md pt-15" >
                <div className="bg-[#F7F7F7] flex flex-row p-4 rounded-xl justify-between">
                    <Search className="text-[#262626]" />
                    <SlidersHorizontal className="text-[#262626]" />
                </div>

                <div className="bg-[#F7F7F7] mt-10 grid grid-cols-3 p-4 rounded-2xl  gap-10">
                    <div className="flex flex-col">
                        <User  className="bg-[#E9EFFD] text-[#2563EB] w-15  h-15 p-3 rounded-4xl"/>
                        <p>Account</p>
                    </div>

                    <div className="flex flex-col">
                        <img src={Payment} alt="Payment" className="bg-[#E9EFFD] text-[#2563EB] w-15  h-15 p-3 rounded-4xl" />
                        <p>Payments</p>
                    </div>

                    <div className="flex flex-col">
                        <img src={Inqury} alt="Inqury" className="bg-[#E9EFFD] text-[#2563EB] w-15  h-15 p-3 rounded-4xl" />
                        <p>Inqury</p>
                    </div>

                    <div className="flex flex-col">
                        <Plane className="bg-[#E9EFFD] text-[#2563EB] w-15  h-15 p-3 rounded-4xl" />
                        <p>Trips</p>
                    </div>

                    <div className="flex flex-col">
                        <img src={Documents} alt="Documents" className="bg-[#E9EFFD] text-[#2563EB] w-15  h-15 p-3 rounded-4xl" />
                        <p>Documents</p>
                    </div>

                    <div className="flex flex-col">
                        <img src={Support} alt="Payment" className="bg-[#E9EFFD] text-[#2563EB] w-15  h-15 p-3 rounded-4xl" />
                        <p>Support</p>
                    </div>
                </div>

                <div>
                    <button className="bg-[#2563EB] text-center rounded-xl w-full p-4 mt-6 text-white">Chat Simi </button>
                </div>
            </section>
        </div>
    )
}
export default Helpcenter;