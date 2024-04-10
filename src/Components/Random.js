import React, { useEffect, useState } from 'react'
import axios from 'axios'


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const Random = () => {
    const[ gif  ,setGif] =useState('')
     async function fetchData() {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`; // Corrected string formatting
        const output = await axios.get(url)
console.log(output)
   }

   useEffect(()=>{
    fetchData();
   },[])
    function clickHandler(){

    }


  return (
    <div className='w-1/2 h-[450px] bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]' >
   <h1 className='text-2xl underline uppercase font-bold' >Random Gif </h1>
   <img width="450" src={gif} alt="gif" />
   <button className='w-10/12 bg-blue-700 text-lg rounded-lg text-white' onClick={clickHandler} >Genrate</button>
    </div>
  )
}

export default Random