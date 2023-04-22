import React from 'react'

const Hero = () => {
    return (
        <><div className="hero flex 2xl:m-20  sm:m-1">
        <div className="heroleft flex-1 flex-wrap md:w-1/2 m-2 md:m-2  2xl:mr-36 ">
          <div className="2xl:text-[74px]">
            <div className="flex font-['Montserrat'] ">
            <h1 className="text-[#2F281E] font-[1000] 2xl:text-[74px]  md:text-6xl leading-tight font-montserrat 2xl:my-4">Make <h1> learning fun!</h1></h1>
            </div>
            <p className="text-[#2F281E]  text-2xl md:text-xl font-montserrat leading-tight mt-4 2xl:my-4">Any subject, in any language, on any device, for all ages!</p>
          
          </div>
         
          <button className="bg-[#3A5AFF] w-full md:w-72 h-12 rounded-md font-bold text-white font-montserrat mt-8 md:mt-16 2xl:my-4 2xl:w-64">Sign up for free</button>
          <p className="font-['Montserrat'] my-8 text-[18px] font-[1000] ">Or download the app:</p>
         <div className="flex ">
                <img className="pr-4" src={require("./image/app.png")} alt="app" />
                <img src={require("./image/google.png")} alt="google" />
            </div> </div>
        <div className="heroright flex-1   md:w-1/2 md:my-0">
          <img className="w-full" src={require("./image/hero.jpg")} alt="" />
        </div>
      </div>
      
        </>
    )
}

export default Hero