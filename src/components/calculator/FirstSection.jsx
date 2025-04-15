"use client";
import React from 'react'
import RangeSlider from '../../utils/RangeSlider'
import { useSelector } from "react-redux";
import { safeNumber } from '@/utils/functions';

 const FirstSection = (props) => {
  const state = useSelector((state) => state.calculator);
  return (
<div className={`flex flex-col justify-start items-start ${props.className}`}>
        <h2 className="text-white text-3xl font-montserrat font-small">Your Ad Spend now</h2>

        <div className="relative w-[100%] sm:w-[80%] sm:mr-[30px] self-start flex flex-col justify-between h-[80%]">
        <RangeSlider header={"Current Monthly Ad Spend"}  name={"CurrentMonthlyAdSpend"}/>
        <RangeSlider header={"Current Monthly Revenue"}  name={"CurrentMonthlyRevenue"}/>
        <div className="relative w-[100%] h-[1px] bg-[#6F6E6E] my-[15px]"></div>
        <div className="text-white text-left text-base mt-[20px] flex justify-between items-center">
        <span className="font-montserrat sans-serif text-1xl">Current Monthly ROAS</span>
        <span className="bg-[#007df2] px-6 p-1 rounded-[6px]">{safeNumber(state.roas)}</span>
        </div>
        </div>
    </div>
  )
}

export default FirstSection;

