import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const Personal = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className=" absolute gap-15 top-0 flex items-center mt-6">
                    <button className="mr-3 text-xl" onClick={() => navigate(-1)}>
                        <ArrowLeft />
                    </button>
                    <h1 className="text-lg font-semibold">Personal Information</h1>
                </div>
            </div>
            <div className="w-full max-w-md">
                <h2>JAMES HARRISON</h2>
                <form action="#" className="flex flex-col gap-10">
                    <input type="text" placeholder="Fullname" required className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none" />
                    <input type="text" placeholder="Email Address" required className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none" />
                    <input type="text" placeholder="Phone Number" required className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none" />
                    <input type="text" placeholder="Date Of Birth" required className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none" />
                    <input type="text" placeholder="Gender" required className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none" />
                    <input type="text" placeholder="Preferred Language" required className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none" />
                    <input type="text" placeholder="Country of Residence" required className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none" />

                </form>
                < p className="text-center mt-5 font-extrabold">Edit Profile</p>
            </div>

        </div>

    )
}
export default Personal