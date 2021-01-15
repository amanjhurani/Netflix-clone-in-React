import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import "./Row.css";
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';


function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState();
    const opts = {
        height: "390px",
        width: "100%",
        playerVar: {
            autoplay: 1,
        },
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        }
        else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    const urls = new URL(url);
                    const params = new URLSearchParams(urls.search);
                    console.log(params.get("v"));
                    setTrailerUrl(params.get("v"));
                })
                .catch(error => {
                    console.log(error);
                })


        }
    }

    useEffect(() => {

        async function fetchData() {

            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;

        }

        fetchData();

    }, [fetchUrl])
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {/* row posters */}
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {(trailerUrl ? <YouTube videoId={trailerUrl} opts={opts} /> : "")}
        </div>

    )
}

export default Row
