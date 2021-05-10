import { useState, useEffect } from "react";
import axios from "axios";
import CardFilm from "./Card/CardFilm";

const Movies = () => {
  const [listFilmPopular, setlistFilmPopular] = useState([]);
  const [resultFilmSearch, setResultFilmSearch] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=b5be08aabb5691e1522a3bd74604d1ee&language=en-US&page=1"
      )
      .then((requetefilm) => {
        return requetefilm.data;
      })
      .then((films) => {
        setlistFilmPopular(films.results);
        setResultFilmSearch(films);
      });
  }, []);
  console.log(listFilmPopular);
  return (
    <div className="main--movies row">
      <h2 className="col-12">all movies</h2>
      
      <div className="row col-12 justify-content-between container--film">
        {listFilmPopular.map((film)=>{
            return(
                <CardFilm
                imageFilm={'https://image.tmdb.org/t/p/original/'+film.backdrop_path}
                titleFilm={film.title}
                idMovies={film.id}
                />
            )
        })}
      </div>    
    </div>
  );
};
export default Movies;