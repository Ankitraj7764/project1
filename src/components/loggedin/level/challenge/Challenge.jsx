import React, { useState, useEffect } from 'react'

import axios from 'axios'

const Challenge = () => {
    const [fData, setfData] = useState([])
    const fetchData = async () => {
        const val = await axios.get("http://localhost:8080/get-all-challenges");

        const data = await val.data.data.data;
        setfData(data)
        console.log(data)

    }
    useEffect(() => {

        fetchData();

    }, [])
    return (


        <div>
          <div className="flex flex-wrap justify-center  md:w-full lg:w-full xl:w-full mt-20 mb-24 ">
          {
                fData.map((e) => {
                    return (
                   <div className="px-20 flex-1 mb-2 border-x-2 lg:w-5/12  ">
                         <a href="/detail">     
                       <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 p-5 text-sm lg:text-md md:text-md bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400 "><p className="text-xl bg-blue-400 p-1 mb-2 px-8 rounded-lg"> Challenge</p>{e.challengename} </p>
                       <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md flex flex-wrap font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400"><span className="text-blue-600 font-bold ">Description</span> : {e.description} </p>
                       <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400"><span className="text-blue-600 font-bold ">Difficulty :</span> : {e.difficulty} </p>
                       <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400"><span className="text-blue-600 font-bold ">nextchallengeurl</span> :{e.nextchallengeurl} </p>
                       <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400"><span className="text-blue-600 font-bold ">previouschallengeurl</span>: {e.previouschallengeurl} </p>
                       <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400"><span className="text-blue-600 font-bold ">Score</span> : {e.score} </p>
                        </a>
                    </div>
                    
                    )
                })
            }
          </div>
        </div>
    )
}

export default Challenge