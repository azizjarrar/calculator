"use client";

import React from 'react';
import Expenses from '../../utils/Expenses'
import { useSelector } from "react-redux";
import { customRound, safeNumber } from '@/utils/functions';

const SecondSection = (props) => {
    const state = useSelector((state) => state.calculator);
    return (
        <div className={`flex flex-col justify-start items-start ${props.className} sm:mt-0 mt-[130px] sm:mt-[0px]`}>
            <div
            className="
                absolute 
                bg-[url('https://cdn.prod.website-files.com/6596ccfbb3d9754c38fb8e60/6596da5dc1170c5d925c93d2_Vector%20280.webp')] 
                bg-no-repeat 
                bg-cover 
                bg-[position:50%_0] 
                border-[4px] 
                border-[#007df2] 
                border-t-0 
                rounded-md 
                w-full 
                h-[58%] 
                mt-0 
                mx-auto 
                block 
                inset-auto right-0 bottom-0 left-auto 
                overflow-hidden
                sm:hidden
            "
            >
            <div className=" w-full h-auto overflow-hidden">
                <img
                src="https://cdn.prod.website-files.com/6596ccfbb3d9754c38fb8e60/6596da5dc1170c5d925c93d5_divid.svg"
                loading="lazy"
                alt=""
                className="w-full h-auto object-contain sm:hidden"
                />
            </div>

            <div className=" w-full h-auto overflow-hidden">
                <img
                src="https://cdn.prod.website-files.com/6596ccfbb3d9754c38fb8e60/6596da5dc1170c5d925c93d6_Vector%20280.webp"
                loading="lazy"
                alt=""
                className="w-full h-auto top-0  absolute object-contain sm:hidden"
                />
            </div>
            </div>
            <div className="relative sm:w-[95%] w-[100%] self-start sm:ml-[20px]">
                <div className="flex items-center justify-center">
                <h3 className='text-white text-3xl  text-center pr-5'>With</h3>
                <img
                src="https://cdn.prod.website-files.com/6596ccfbb3d9754c38fb8e60/6596da5dc1170c5d925c93d1_brandmark%20logo.svg"
                loading="lazy"
                alt="onetreck logo"
                className='max-w-[60%]'
                />
            </div>
                <div className="mt-[15px] bg-cover bg-center border-6 border-solid border-[transparent]  sm:border-[transparent]  border-t-0 rounded-md  h-[58%] sm:h-[100%]  mx-auto block overflow-hidden w-[100%]">
                    <Expenses adSpend={state.adSpend} name={"Ad Spend - "} percentage={state.adSpendReduction.toLocaleString()} charge1={`$${state.adSpend}`} charge2={`$${state.newAdSpend.toLocaleString()}`} paramOne={"Your current Ad Spend"} />
                    <Expenses adSpend={state.adSpend} name={"Revenue + "} percentage={state.revenueIncrease.toLocaleString()} charge1={`$${state.revenue}`} charge2={`$${state.newRevenue.toLocaleString()}`} paramOne={"Your current Revenue"} />
                    <Expenses adSpend={state.adSpend} name={"ROAS + "} percentage={safeNumber(customRound(state.roasIncrease.toLocaleString()))} charge1={safeNumber(state.roas)} charge2={safeNumber(state.newRoas)} paramOne={"Your current ROAS"} />
                    <div className="text-white text-left text-base mt-[20px] flex justify-between items-center mb-[15px]">
                        <span className='w-1/2 font-montserrat sans-serif text-1xl sm:text-2xl font-semibold pl-[36px] '>Monthly Savings</span>
                        <span
                            className="py-3 px-7 rounded-[6px] w-auto text-1xl sm:text-2xl font-semibold "
                            style={{
                                background: 'linear-gradient(111.04deg, rgba(70, 166, 255, 0.4) 0%, #46A6FF 100%)',
                            }}
                        >
                            {`$${(state.savings ?? 0).toLocaleString()}`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;