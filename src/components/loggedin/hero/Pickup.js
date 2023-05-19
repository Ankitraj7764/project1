import React, { useState, useEffect } from 'react'
import PickupChild from './PickupChild'
import axios from 'axios'

const Pickup = () => {
    const [fData, setfData] = useState([])
    const [fLevel, setfLevel] = useState([])
  
    const fetchData = async () => {
        const val = await axios.get("http://localhost:8080/get-all-modules");

       const data = await val.data.data.data;
        setfData(data)
     

    }
    const fetchLevel = async () => {
        const valLevel= await axios.get("http://localhost:8080/get-all-levels");
       
       const dataLevel= await valLevel.data.data.data;
     
        setfLevel(dataLevel)
      
     for(let i=0;i<dataLevel.length;i++){
        const add_level= await axios.post("http://localhost:8080/add-level-in-module",{  
   

        "module-name":`Test_module_${i+1}`,
        "extra-level":{
            
                "level-name":`${dataLevel[i]._id}`
               
            
        }
        
              
        })

     }

    }
    useEffect(() => {

        fetchData();
        fetchLevel(); 


    }, [])
    return (
        <>      
     
           <div className="flex flex-wrap  md:w-6/12 lg:w-7/12 xl:w-8/12 mt-20 mb-24 ">

                    {
                        fData.map((e) => {

                            return (
                            <a href="/level" key={e._id}>
                                <div className="flex justify-center items-center mt-4 h-12 w-40 md:h-20 md:w-40 hover:bg-white hover:duration-300 rounded-lg bg-teal-400 m-2 ">

                                    <span>{e.modulename}</span>
                                  
                                </div>
                            </a>
                            )
                        })
                    }


                </div>


        
        </>
    )
}

export default Pickup