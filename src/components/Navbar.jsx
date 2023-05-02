import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <>
            <div className="navbar mt-4 mb-800 pr-4 py-0 flex flex-wrap  ">
                <div className="heading flex-1">
                    <div className="flex" >
                        <img className="mt-3 pl-8 h-10  mr-2" src={require("../image/Logo.png")} alt="" />
                        <h1 className=" text-[50px] bold font-['Vibur']
                       ">Kurtis Classroom</h1>
                    </div>

                </div>
                <ul className="flex-1 flex-row-reverse mx-3 ">
                    <div className="flex flex-row-reverse text-xl">
                        <li className=" p-2 "><Link to="#news"><img src={require("../image/group16.png")} alt="" /></Link></li>
                        <li className=" border-2 rounded-lg w-24 h-10 mx-2 p-1 "><Link to="/login" className="flex align-middle justify-center ">Login</Link></li>

                        <li className=" border-2 rounded-lg w-24 h-10 mx-2 p-1 "><Link to="/register" className="flex align-middle justify-center ">Register</Link></li>
                        <li className="bg-[#3A5AFF] rounded-lg text-white w-24 h-10 mx-2 p-1"><Link to="/" className="flex align-middle justify-center py-1">Home</Link></li>


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