import React from "react"

const Secsix = () => {
    return (
        <div className="px-4 md:px-20 py-20 bg-[#93b59f] hover:text-black duration-200 text-gray-200 border-y  border-gray-300">
            <div className="flex gap-16 flex-col md:flex-row">
                <div className="text-7xl font-bold font-mono">04</div>
                <div className="text-4xl flex items-center w-60 font-mono">Medical Reimbursement</div>
                <div className="text-sm w-80 md:w-[600px]">
                    This is the space to describe the service and explain how customers
                    or clients can benefit from it. It’s an opportunity to add a short
                    description that includes relevant details, like pricing, duration,
                    location and how to book the service.
                </div>
            </div>
        </div>
    )
}

export default Secsix;