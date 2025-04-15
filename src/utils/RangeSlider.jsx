"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAdSpend, updateRevenue} from '../redux/features/calculatorSlice'
const RangeSlider = (props) => {
  const dispatch = useDispatch();

  const min = 0;
  const max = 500000;
  const [value, setValue] = useState(250000);

  const handleSliderChange = (e) => {
    if(props.name==="CurrentMonthlyAdSpend"){
      dispatch(updateAdSpend(e.target.value, "CurrentMonthlyAdSpend"));
    }else{
      dispatch(updateRevenue(e.target.value, "CurrentMonthlyRevenue"));
    }
    setValue(Number(e.target.value));
  };

  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-md py-5 flex flex-col items-center text-white font-sans">
      <div className="text-left w-full font-montserrat text-xl">{props.header}</div>
      <div className="relative w-full mt-5">
        {/* Value bubble */}
        <div
          className="absolute -top-2 transform -translate-x-1/2 bg-gradient-to-r Montserrat from-[#007DF2] to-[#007DF2] text-white px-4 py-1 rounded-lg text-lm shadow-md"
          style={{ left: `calc(${percent}% + (${8 - percent * 0.26}px))` }}
        >
          ${value.toLocaleString()}
        </div>

        {/* Labels */}
        <div className="flex justify-between text-1xl mt-3 font-semibold px-1">
          <span>$0</span>
          <span>$500,000</span>
        </div>

        {/* Slider with dynamic track */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={5000}
          onChange={handleSliderChange}
          className="w-full h-4 rounded-full appearance-none focus:outline-none"
          style={{
            background: `linear-gradient(to right, #007DF2 0%, #007DF2 ${percent}%, #7e7e86 ${percent}%, #7e7e86 100%)`,
          }}
        />
      </div>

      {/* Custom thumb styling */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 29px;
          width: 29px;
          background: radial-gradient(70.71% 70.71% at 50% 50%, #46A6FF 0%, #007DF2 100%);
          border-radius: 9999px;
          cursor: pointer;
          margin-top: -4px;
        }

        input[type="range"]::-moz-range-thumb {
          height: 29px;
          width: 29px;
          background: radial-gradient(70.71% 70.71% at 50% 50%, #46A6FF 0%, #007DF2 100%);
          border-radius: 9999px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default RangeSlider;