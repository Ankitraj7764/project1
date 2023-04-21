import React from 'react'

const Hero = () => {
    return (
        <>
            <div class="hero flex flex-col md:flex-row m-4">
                <div class="heroleft flex-1 w-full md:w-56 m-20">
                    <div class="">
                        <h1 class="text-[#2F281E] font-['Montserrat'] text-4xl lg:text-[74px] font-bold leading-[100px]">Make </h1>
                        <h1 class="text-[#2F281E] font-['Montserrat'] text-4xl lg:text-[74px] font-bold leading-[100px]">learning fun!</h1>
                        <p className="text-[#2F281E] font-['Montserrat'] text-4xl md:text-[24px] font-bold leading-[100px]">Any subject, in any language, on any device, for all ages!</p>
                    </div>
                    <button className="bg-[#3A5AFF] w-96 h-12 rounded-md font-['Montserrat'] text-white font-bold">Sign up for free</button>
                </div>
                <div class="heroright flex-1 w-full md:w-52  md:my-20">
                    <img class="" src={require("./image/hero.jpg")} alt="" />
                </div>
            </div>

        </>
    )
}

export default Hero