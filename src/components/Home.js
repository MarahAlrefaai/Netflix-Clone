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
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <>
            <h1>Home Page</h1>
                {
                    movie && (<MovieList movie={movie} />)
                }
        </>
    )
}
export default Home;
