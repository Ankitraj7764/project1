import React from 'react'

const Navbar = () => {
    
    
    return (
        <>
            <div className="navbar mt-4 mb-800 pr-4 py-0 flex">
                <div className="heading flex-1">
                  <div className="flex">
                  <img className=" pl-8 h-12 my-auto mr" src={require("./image/Logo.png")} alt="" />
                       <h1 className="w-[351px] h-[51px] top-[43px] left-[132px] font-['vibur']
                       ">Kurtis Classrom</h1>  
                  </div>
                   
                </div>
                <ul className="flex-1 flex-row-reverse mx-4">
                    <div className="flex flex-row-reverse">
                        <li className=" border-2 rounded-sm w-16 h-8 mx-4"><a href="#news" className="flex align-middle justify-center py-1">News</a></li>
                        <li className=" p-2 "><a href="#news">News</a></li>
                     
                            <li class="bg-sky-600 rounded-md text-white w-16 mx-4 h-8 "><a href="#home" className="flex align-middle justify-center py-1">Home</a></li>
                        

                        <li class="dropdown p-2">
                            <a href="#" class="dropbtn">Dropdown</a>
                            <div class="dropdown-content">

                            </div>
                        </li>
                    </div>

                </ul>
            </div>


        </>
    )
}

export default Navbar