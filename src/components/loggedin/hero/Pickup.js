import React from 'react'
import PickupChild from './PickupChild'

const Pickup = () => {
    return (
        <>
            <div className="flex flex-wrap justify-between     md:w-10/12 lg:w-11/12 xl:w-11/12 mt-20 mb-24  ">
             
               <div className="flex flex-row justify-center">
                <PickupChild />
                <PickupChild />
                <PickupChild />

               </div>
               <div className="flex flex-row justify-center ">

                <PickupChild />
                <PickupChild />
                <PickupChild />
               </div>
             
            </div>
        </>
    )
}

export default Pickup