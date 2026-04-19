import React from 'react'

const VideoTitle = ({title, plot, director}) => {
  return (
    <div className='pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className=' text-6xl font-bold'>{title}</h1>
        <p className='w-1/2 text-lg pt-6'>{plot}</p>
        <div className='flex flex-row gap-4 w-1/2'>
            <button className='bg-white text-black p-4 px-12 text-lg rounded-lg hover:bg-opacity-80'>▶️ Play</button>
            <button className='bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg'> More Info</button>

        </div>
    </div>
  )
}

export default VideoTitle