import React from 'react'
import Card from './Card'

const LevelCard = () => {
    return (
        <>

            <div className="flex justify-center items-center flex-col shadow-lg">
                <button className="m-8 rounded-lg px-2 py-1 text-md border-2 shadow-lg">Level 1</button>
                <Card />
            </div>
            <div className="flex flex-col flex-wrap  m-8 ">
                <div className="flex flex-col items-center justify-center">
                    <button className="bg-yellow-200 rounded-lg shadow-lg px-16 py-1 text-md">Jump to level 2</button>
                    <button className="m-8 rounded-lg px-2 py-1 text-md border-2 shadow-lg ">Level 2</button>
                </div>

                <div class="flex justify-center items-center">
                    <div class="flex gap-2 sm:gap-4 md:gap-8 lg:gap-32 xl:gap-52">
                        <Card />
                        <Card />
                    </div>
                </div>
               
            </div>


        </>
    )
}

export default LevelCard