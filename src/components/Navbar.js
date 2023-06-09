import React from 'react'

const Navbar = () => {


    return (
        <>
            <div className="navbar mt-4 mb-800 pr-4 py-0 flex flex-wrap ">
                <div className="heading flex-1">
                    <div className="flex">
                        <img className="mt-3 pl-8 h-10  mr-2" src={require("./image/Logo.png")} alt="" />
                        <h1 className=" text-[50px] w-[351px] h-[51px] top-[43px] left-[132px] font-['Vibur']
                       ">Kurtis Classrom</h1>
                    </div>

                </div>
                <ul className="flex-1 flex-row-reverse mx-4 ">
                    <div className="flex flex-row-reverse text-xl">
                        <li className=" p-2 "><a href="#news"><img src={require("./image/group16.png")} alt="" /></a></li>

                        <li className=" border-2 rounded-sm w-24 h-10 mx-4 p-1 "><a href="#news" className="flex align-middle justify-center ">Login</a></li>
                        <li className="bg-[#3A5AFF] rounded-md text-white w-24 h-10 mx-4 p-1"><a href="#home" className="flex align-middle justify-center py-1">Home</a></li>


                        <li className="dropdown p-1 ">
                            <select className='p-0' name="cars" id="cars">

                              
                                <option value="opel">En</option>
                                <option value="audi">Audi</option>
                            </select>
                            <div className="dropdown-content">

                            </div>
                        </li>
                    </div>

                </ul>
            </div>


        </>
    )
}

export default Navbar