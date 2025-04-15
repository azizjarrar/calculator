import React from 'react'
import FirstSection from './FirstSection.jsx'
import SecondSection from './SecondSection.jsx'


const Index = () => {
    return (
        <div
            className="
               relative
                max-w-[1000px] 
                sm:h-[600px] 
                mx-auto 
                rounded-lg 
                flex flex-col md:flex-row 
                p-4 md:p-[2%] 
                font-montserrat text-base leading-6 
                border border-[#6F6E6E]
                bg-gradient-to-br from-[#8581810d] to-[#aaa3]
                md:bg-[url('https://cdn.prod.website-files.com/6596ccfbb3d9754c38fb8e60/6596da5dc1170c5d925c93d2_Group%209969.webp')]
                md:bg-[length:60%_100%]
                md:bg-[position:right_center]
                md:bg-no-repeat"
            >
            <div className=" w-full absolute top-0 right-0 h-full w-full sm:bg-[linear-gradient(119deg,#fff0_54%,#46a6ff52),linear-gradient(124deg,#8581810d,#aaa3)]"></div>
            <FirstSection className="md:w-[50%] " />
            <SecondSection className="md:w-[50%] " />
        </div>
    );
};

export default Index;


