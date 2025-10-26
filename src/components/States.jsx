import { CookingPot, ScrollText, TicketCheck } from 'lucide-react';
import React from 'react';

const States = ({totalOrder, totalCooking, totalReadyItems}) => {
    return (
        <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className="border-4 border-dotted rounded-2xl border-[#FCB700] p-5">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <ScrollText className="animate-pulse" color="#FCB700" size={100} />
                    <div className="text-xl text-center">
                        Current Orders <h2 className="text-6xl font-bold">{totalOrder}</h2>
                    </div>
                </div>
            </div>
            <div className="border-4 border-dotted rounded-2xl border-[#FCB700] p-5">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <CookingPot className="animate-pulse" color="#FCB700" size={100} />
                    <div className="text-xl text-center">
                        Currently Cooking <h2 className="text-6xl font-bold">{totalCooking}</h2>
                    </div>
                </div>
            </div>
            <div className="border-4 border-dotted rounded-2xl border-[#FCB700] p-5">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <TicketCheck className="animate-pulse" color="#FCB700" size={100} />
                    <div className="text-xl text-center">
                        Ready to Serve <h2 className="text-6xl font-bold">{totalReadyItems}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default States;