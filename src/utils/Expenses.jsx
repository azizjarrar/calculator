import React from 'react';
const Expenses = (props) => {

  console.log("props", props)
  return (
    <div
      className="text-white space-y-2 px-4 my-4 w-[90%] max-w-[370px] mx-auto border border-[#6f6e6e] rounded-[1.5rem] p-4 relative overflow-hidden h-[120px] "
      style={{ background: 'linear-gradient(122.68deg, rgba(133, 129, 129, 0.05) 0%, rgba(170, 170, 170, 0.15) 100%)' }}
    >
      <div className="flex items-center gap-2 text-sl m-0">
        <span className='m-0'>{props.name} </span>
        <span className="font-bold m-0">{props.percentage}</span>
      </div>
      <div className="flex items-center justify-between gap-2 w-full m-0 mb-[10px]">
        <div className="chargeContainer relative h-[27px] w-[70%] bg-[#2c2c2c] rounded overflow-hidden">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[15px]">{props.paramOne}</span>
          <div
            className="h-full rounded transition-all duration-700 ease-in-out"
            style={{
              width: `${Math.min(
                (parseFloat(String(props.charge1).replace(/[$,\.]/g, '')) /
                  (props.paramOne === "Your current ROAS" ? 100 : 500000)) * 100,
                100
              )
                }%`,
              background: 'linear-gradient(90deg, #B3BDD0 0%, #707886 100%)',
            }}
          ></div>
        </div>
        <span className="whitespace-nowrap">{props.charge1}</span>
      </div>
      <div className="flex items-center justify-between gap-2 w-full m-0">
        <div className='chargeContainer h-[27px] w-[70%] relative'>
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[15px]">with ONETRACK</span>
          <div
            className="h-full rounded transition-all duration-700 ease-in-out"
            style={{
              width: `${Math.min(
                (parseFloat(String(props.charge2).replace(/[$,\.]/g, '')) /
                  (props.paramOne === "Your current ROAS" ? 100 : 500000)) * 100,
                100
              )
                }%`,
              background: 'linear-gradient(259deg, #46a6ff 0%, #005fb8 100%)',
            }}
          ></div>
        </div>
        <span className="whitespace-nowrap">{props.charge2}</span>
      </div>
    </div>
  );
};

export default Expenses;