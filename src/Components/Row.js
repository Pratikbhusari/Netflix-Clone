import axios from 'axios'
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


function Row({ title, fetchURL }) {

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("");


    useEffect(() => {
        axios.get(fetchURL)
            .then((response) => {
                setMovies(response.data.results)
            })
    }, [fetchURL])

    console.log(movies)

    const opts = {
       
        playerVars: {

            autoplay: 1

        }

    }

    const handleClick = (item) => {
        if (trailerUrl) {
            setTrailerUrl('')
        }
        else {
            movieTrailer(item?.title || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch((error) => { console.log(error) })

        }

    }
    return (
        <>

            <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
            <div className=' relative flex items-center'>
                <div id={'slider'} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative'>
                    {
                        movies.map((item) => {
                            return (
                                <div className=' w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative cursor-pointer p-2 inline-block'>
                                    <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} onClick={() => handleClick(item)} />
                                </div>
                            )
                        })
                    }
                </div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} className=' mr-[5rem]  w-[30rem] sm:w-[40rem] md:w-[60rem] lg:w-[80rem]'></YouTube>}



            </div>


        </>
    )
}

export default Row


