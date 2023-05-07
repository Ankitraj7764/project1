import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <>
            {/* <div className="navbar mt-1 md:mt-2 lg:mt-4 mb-800 lg:pr-4 md:pr-2 pr-0 py-0 flex flex-wrap  ">
                <div className="heading flex-1 ">
                    <div className="flex " >
                        <img className="mt-3 pl-0 md:pl-4 lg:pl-8 h-10  mr-0 md:mr-1 lg:mr-2" src={require("../image/Logo.png")} alt="" />
                        <h1 className=" text-[20px] bold font-['Vibur'] md:text-[30px] lg:text-[50px]
                       ">Kurtis Classroom</h1>
                    </div>

                </div>
                <ul className="  flex-1 flex-row-reverse md:ml-1 ml-1  ">
                    <div className="flex  flex-col-reverse  text-xl md:flex-col-reverse lg:flex-row-reverse md:my-3 my-3 md:ml-12 ml-12 lg:ml-auto ">
                        <li className=" p-2 "><Link to="#news"><img src={require("../image/group16.png")} alt="" /></Link></li>
                        <li className=" border-2 rounded-lg w-24 h-10  p-1   mx-0 md:mx-2 lg:mx-4"><Link to="/login" className="flex align-middle justify-center ">Login</Link></li>

                        <li className=" border-2 rounded-lg w-24 h-10 p-1  mx-0 md:mx-2 lg:mx-4"><Link to="/register" className="flex align-middle justify-center ">Register</Link></li>
                        <li className="bg-[#3A5AFF] rounded-lg text-white w-24 h-10  p-1 mx-0 md:mx-2 lg:mx-4"><Link to="/" className="flex align-middle justify-center py-1">Home</Link></li>


                        <li className="dropdown p-1  mx-0 md:mx-2 lg:mx-4">
                            <select className='p-0' name="cars" id="cars">


                                <option value="opel">En</option>
                                <option value="audi">Audi</option>
                            </select>
                            <div className="dropdown-content">

                            </div>
                        </li>
                    </div>

                </ul>
            </div> */}
  
<nav className="bg-white border-gray-200 dark:bg-gray-900 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between  p-4">
    <Link to="/" className="flex items-center">
        <img src={require("../image/Logo.png")} className=" mt-1 pl-0 md:pl-4 lg:pl-8 h-12  mr-0 md:mr-1 lg:mr-2" alt="Flowbite Logo" />
        <span className="self-center text-[20px] bold font-['Vibur'] md:text-[30px] lg:text-[50px] whitespace-nowrap dark:text-white">Kurtis Classroom</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">

      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li  className="rounded-lg block pt-1.5 p-2 text-white  h-10 border-2 md:bg-transparent md:text-white  lg:text-white    w-20 dark:text-white md:dark:text-white bg-[#3A5AFF] sm:bg-[#3A5AFF] md:bg-[#3A5AFF] lg:bg-[#3A5AFF]" >
          <Link to="/" className="flex align-middle justify-center " aria-current="page">Home</Link>
        </li>
        <li  className="rounded-lg block pt-1.5 p-2   h-10 border-2 md:bg-transparent md:text-black  lg:text-black sm:text-black text-black    w-20 dark:text-black  " >
          <Link to="/register" className="flex align-middle justify-center " aria-current="page">Register</Link>
        </li>
        <li  className="rounded-lg block pt-1.5 p-2   h-10 border-2 md:bg-transparent md:text-black  lg:text-black sm:text-black text-black    w-20    dark:text-white md:dark:text-white " >
          <Link to="/login" className="flex align-middle justify-center " aria-current="page">Login</Link>
        </li>
       
        <li>
          <Link to="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><img src={require("../image/group16.png")} alt="" /></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


        </>
    )
}

export default Navbar