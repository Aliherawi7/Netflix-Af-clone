import React, { useState, useEffect } from 'react'
import "./Row.css"
import axios from './axios'
import YoutTube from 'react-youtube'
import movieTrailer from "movie-trailer"
const  base_img_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLarge }) {
    const [movies, setMovies] = useState([]);
    const [trailUrl, setTrailUrl] = useState("");
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
       
    }, [fetchUrl])

    const options = {
        height: "390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    }
    const clickHandler = (movie)=>{
        if(trailUrl){
            setTrailUrl("")
        }else{
            movieTrailer(movie?.title || "")
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailUrl(urlParams.get('v'));
            }).catch((error)=> console.log(error));
        }
    }
    return (
        <div className="row">
            <h2>{title}</h2>
        <div className={`row-posters ${isLarge && "row-larger-poster"}`}>

                {movies.map((item) => (
                    <img
                        onClick={() => clickHandler(item)}
                        key={item.id}
                        className="row-poster"
                        src={`${base_img_url}${isLarge? item?.poster_path: item?.backdrop_path}`}
                        alt={item.name}
                    />
                ))}
            </div>
            {trailUrl && <YoutTube videoId ={trailUrl} opts={options}/>}
        </div>
    )
}

export default Row
