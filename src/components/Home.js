import React, { useEffect, useState } from "react";
import MovieList from './MovieList';
function Home() {
    const [movie, setMovies] = useState();
    const getMovies = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`)
            const data = await response.json();
            console.log(data);
            setMovies(data);
        } catch (error) {
            console.log("error", error);
        }
    };
    function UpdateMovies(newmovie, id) {
        let UpdateMovie = movie.map(movie => {
            if (movie.id == id) {
                movie.comment = newmovie.comment;
                return movie;
            } else {
                return movie;
            }
        })
        setMovies(UpdateMovie);}
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <>
            <h1>Home Page</h1>
                {
                    movie && (<MovieList  movie={movie} UpdateMovies={UpdateMovies} />)
                }
        </>
    )
}
export default Home;
