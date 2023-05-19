import React, { useState, useEffect } from 'react'

import axios from 'axios'
import Card from './Card'

const LevelCard = () => {
    const [fData, setfData] = useState([])
    const fetchData = async () => {
        const val = await axios.get("http://localhost:8080/get-all-levels");

        const data = await val.data.data.data;
        setfData(data)
        console.log(data)

    }
    const fetchLevel = async () => {
        const valLevel= await axios.get("http://localhost:8080/get-all-categories");
       
       const dataLevel= await valLevel.data.data.data;
     
       
      
        const add_level= await axios.post("http://localhost:8080/add-category-in-level",{  
   

        "level-name":"test-level-1",
        "extra-category":{
            
                "category-name":`${dataLevel[0]._id}`
               
            
        }
        
              
        })

     

    }
    useEffect(() => {

        fetchData();
        fetchLevel();

    }, [])
    return (
        <>

            <div className="flex justify-center items-center flex-col shadow-lg">
                <button className="m-8 rounded-lg px-2 py-1 text-md border-2 shadow-lg">leve;</button>
                <Card />
            </div>
        
          {
            fData.map((e)=>{
                return(
                    <div className="flex flex-col flex-wrap  m-8 ">
                    <div className="flex flex-col items-center justify-center">
                        <button className="bg-yellow-200 rounded-lg shadow-lg px-16 py-1 text-md">{e.levelname}</button>
                        <button className="m-8 rounded-lg px-2 py-1 text-md border-2 shadow-lg ">Level 2</button>
                    </div>
    
                    <div class="flex justify-center items-center">
                        <div class="flex gap-2 sm:gap-4 md:gap-8 lg:gap-32 xl:gap-52">
                            <Card />
                            <Card />
                        </div>
                    </div>
                   
                </div>

                )
            })
          }


        </>
    )
}

export default LevelCard