import React, { useState, useEffect } from 'react'

import axios from 'axios'
import Card from './Card'
import { Link, useParams } from 'react-router-dom'

const LevelCard = () => {
    const [fData, setfData] = useState([])
    
   const route=useParams()
   const idValue=route.id;
   
    const moduleData=async()=>{
        let arr = [];


        const val = await axios.get("http://localhost:8080/get-all-modules");

        const data = await val.data.data.data;
       data.forEach(element => {
        if(element._id===idValue){

           
            
            element.levellist.forEach(async(i)=>{
                const val = await axios.get("http://localhost:8080/get-all-levels");
              
               const data = await val.data.data.data;
               data.forEach(async(j)=>{
          
                   
                   if(j._id===i.levelname){
                    
                    const valLevel= await axios.get("http://localhost:8080/get-all-categories");
       
                    const dataLevel= await valLevel.data.data.data;
                  j.categorylist.forEach((k)=>{
                    dataLevel.forEach((l)=>{
                        
                        if(k.categoryname===l._id){
                            
                            arr.push(l)
                        }
                    })
                  })
                    setfData(arr)
                   }
               })
            })
        }
       });
    }
  
    const fetchCategory = async () => {
        const valLevel= await axios.get("http://localhost:8080/get-all-categories");
       
       const dataLevel= await valLevel.data.data.data;
     

     
      
        const add_level= await axios.post("http://localhost:8080/add-category-in-level",{  
   

        "level-name":"test_level_4",
        "extra-category":{
            
                "category-name":`${dataLevel[3]._id}`
               
            
        }
        
              
        })

     

    }
    useEffect(() => {
        moduleData()
   
        fetchCategory()

    }, [])
    return (
        <>

          
        
          {
            fData.map((e)=>{
                return(
                <Link to={`/problems/${e._id}`}>
                    <div className="flex flex-col flex-wrap  m-8 ">
                    <div className="flex flex-col items-center justify-center">
                        <button className="bg-yellow-200 rounded-lg shadow-lg px-16 py-1 text-md">{e.categoryname}</button>
                        <button className="m-8 rounded-lg px-2 py-1 text-md border-2 shadow-lg ">Level </button>
                    </div>
    
                    <div class="flex justify-center items-center">
                        <div class="flex gap-2 sm:gap-4 md:gap-8 lg:gap-32 xl:gap-52">
                            <Card />
                            <Card />
                        </div>
                    </div>
                   
                </div>
                </Link>

                )
            })
          }


        </>
    )
}

export default LevelCard