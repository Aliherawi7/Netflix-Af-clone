import React, { useState,useEffect } from 'react'
import axios from './axios'
import requests from './requests'
import "./Banner.css"
import YoutTube from 'react-youtube'
import movieTrailer from "movie-trailer"

function Banner() {
    const [movie, setMovie] = useState([]);
    const [trailUrl, setTrailUrl] = useState("");
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random()* request.data.results.length-1)
            ]);
            return request;
        }
         
        fetchData();
    }, [])
    const options = {
        height: "390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    }
    const clickHandler = ()=>{
        console.log(movie)
        if(trailUrl){
            setTrailUrl("")
        }else{
            movieTrailer(movie?.name || "")
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailUrl(urlParams.get('v'));
            }).catch((error)=> console.log(error));
        }
    }




    const style = {
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original${movie.backdrop_path}"
        )`,
        backgroundPosition: "center center"
    }
    let str =""+ movie.overview
    str = str.substring(0, 80)+" ..."

    return (
        <div className="banner" style={style}>
            <div className="banner-content">
                <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner-buttons">
                    <button className="banner-button" onClick={clickHandler}>Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h2 className="banner-description">{str}</h2>
            </div>
            <div className="banner-fadeBottom"></div>
            {trailUrl && <YoutTube videoId ={trailUrl} opts={options}/>}
        </div>
    )
}

export default Banner
