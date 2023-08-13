import React, { useState, useEffect } from 'react'
import request from './Request';
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


function Main() {

  const [movie, setmovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const movies = movie[Math.floor(Math.random() * movie.length)]

  useEffect(() => {
    axios.get(request.requestPopular)
      .then((resp) => {
        setmovie(resp.data.results)
      })
  }, [])
  console.log(movies)

  const CropString=(str, num)=>{
    if(str?.length >num){
      return str.slice(0,num) +"..."
    }
    else{
      return str
    }
  }

  const opts = {
       
    playerVars: {

        autoplay: 1

    }

}
  const clickHandler = (movies) => {
    if (trailerUrl) {
        setTrailerUrl('')
    }
    else {
        movieTrailer(movies?.title || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((error) => { console.log(error) })

    }

}




  return (
    <div className=' w-full text-white h-[460px]'>
      <div className=' w-full h-full'>
        <div className=' absolute w-full h-[460px] bg-gradient-to-r from-black'></div>
        <img className=' w-full h-full object-fit' src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} alt='error' />
        <div className=' absolute flex flex-col ml-0 top-[28%] p-4 md:p-8 w-full ' >
          <h1 className=' text-3xl md:text-4xl font-bold w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'> {movies?.title}</h1>
          <div className='md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%] py-2'>
            <button className=' border bg-gray-300 text-black border-gray-300 py-2 px-5 ' onClick={()=>{clickHandler(movies)}}>Play</button>
            <button className=' border text-gray-300  border-gray-300 py-2 px-5 ml-4'> Watch Later</button>
            
          </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} className=' mr-[5rem]  w-[30rem] sm:w-[40rem] md:w-[60rem] lg:w-[80rem]'></YouTube>}
         
          <p className=' text-sm text-gray-300 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>  released on: {movies?.release_date}</p>
          <p className=' w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'> {CropString(movies?.overview,100)}</p>
          
        
        </div>
       
      </div>
      
      

    </div>
  )
}

export default Main
