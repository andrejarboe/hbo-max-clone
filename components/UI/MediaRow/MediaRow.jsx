import { useState, useEffect } from "react";
import axios from "axios";

const MediaRow = (props) => {
    const [loadingData, setLoadingData] = useState(true);
    const [movies, setMoviesData] = useState([]);

    // /discover/movie?with_genres=28&primary_release_year=2021
    useEffect(() => {
        // Make a request for a user with a given ID
        axios.get('https://api.themoviedb.org/3/discover/movie?with_genres=28&primary_release_year=2021&api_key=8d976d47d1b80d5a77b6ec844f4b541f&language=en-US')
            .then(function (response) {
                setMoviesData(response.data.results)
                setLoadingData(false)
                // handle success
                console.log('response: ' + props.title);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log('error' + props.title);
                console.log(error);
            })
    }, []);

    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index < digit; index++) {
            thumbnails.push(comp);
        }
        return thumbnails
    }
    const showThumbnails = () => {
        // setTimeout(() => setLoadingData(false), 3000);
        return loadingData
            ? loopComp((<Skeleton />), 10)
            : movies.map((movie) => {
                return <Thumbnail movieData={movie} />
            })
    }
    return (
        <div className={`media-row ${props.type}`}>
            <h3 className="media-row__title">{props.title}</h3>
            <div className="media-row__thumbnails">
                {showThumbnails()}
                {/* {loopComp((<Thumbnail />), 10)} */}
            </div>
        </div>
    )
}

const Thumbnail = (props) => {
    return (
        <div className="media-row__thumbnail">
            {/* <img src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/uI0I369wR5MZlnzRVh9bNf3FjX0=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/BOW7XHAQG4I6RKSDEUVRUHIXFI.jpg" alt="" /> */}
            <img src={`http://image.tmdb.org/t/p/original${props.movieData.poster_path}`} alt="" />
            <div className="media-row__top-layer">
                <i className="fas fa-play" />
            </div>
        </div>
    )
}

const Skeleton = () => {
    return (
        <div className="media-row__thumbnail-skeleton">
            <div className="media-row__thumbnail-skeleton-img"></div>
        </div>
    )
}

export default MediaRow;

// API Generes IDs 
// 0: {id: 28, name: "Action"}
// 1: {id: 12, name: "Adventure"}
// 2: {id: 16, name: "Animation"}
// 3: {id: 35, name: "Comedy"}
// 4: {id: 80, name: "Crime"}
// 5: {id: 99, name: "Documentary"}
// 6: {id: 18, name: "Drama"}
// 7: {id: 10751, name: "Family"}
// 8: {id: 14, name: "Fantasy"}
// 9: {id: 36, name: "History"}
// 10: {id: 27, name: "Horror"}
// 11: {id: 10402, name: "Music"}
// 12: {id: 9648, name: "Mystery"}
// 13: {id: 10749, name: "Romance"}
// 14: {id: 878, name: "Science Fiction"}
// 15: {id: 10770, name: "TV Movie"}
// 16: {id: 53, name: "Thriller"}
// 17: {id: 10752, name: "War"}
// 18: {id: 37, name: "Western"}
