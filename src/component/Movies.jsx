import { useState, useEffect } from "react";
import axios from "axios";
import CardFilm from "./Card/CardFilm";
import Pagination from "react-js-pagination";
import DetailsMovie from "./DetailsMovie";

const Movies = (props) => {
  const [listFilmPopular, setlistFilmPopular] = useState([]);
  const [resultFilmSearch, setResultFilmSearch] = useState([]);
  const [currentPages, setCurrentPages] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [movieDetails, setMovieDetails] = useState();

  
  let idMovie = Number(props.match.params.id);
  // async function fetchMoviesDetails(id) {
  //     const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b5be08aabb5691e1522a3bd74604d1ee&language=fr-FR`);
  //     const data = await response.data;
  //     console.log("data : ",data);
  //   return data;
  // }
  const DetailFilm =  (id) => {
    useEffect(() => {
    //   async function fetchMoviesDetails(id) {
    //     const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b5be08aabb5691e1522a3bd74604d1ee&language=fr-FR`);
    //     const data = await response.data;
    //    return data;
    // }
    

      // try {
      //   const dataMovie = fetchMoviesDetails(id);
      //   setMovieDetails(fetchMoviesDetails(id))
      //   console.log("dataMovie dans detail : ",dataMovie);
      //   // setMovieDetails(dataMovie);
      // } catch (error) {
        
      // }
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=b5be08aabb5691e1522a3bd74604d1ee&language=fr-FR`
        )
        .then((data) => {
          setMovieDetails(data.data);
        });
    }, [id]);
  };
  if (idMovie) {
    DetailFilm(idMovie);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=b5be08aabb5691e1522a3bd74604d1ee&language=fr-FR&page=${currentPages}`
      )
      .then((requetefilm) => {
        return requetefilm.data;
      })
      .then((films) => {
        setlistFilmPopular(films.results);
        setResultFilmSearch(films);
        setTotalPages(films.total_pages);
      });
  }, [currentPages, idMovie]);
  const handleCurentPages = (pageNumber) => {
    setCurrentPages(pageNumber);
  };
  const clickCard = (event) => {
  };

  return (
    idMovie ? <DetailsMovie  {...movieDetails}/> : 
    <div className="main--movies row">
      <h2 className="col-12">all movies</h2>
      <div className="row col-12 justify-content-between container--film">
        {listFilmPopular.map((film) => {
          return (
            <CardFilm
              clickCard={clickCard}
              key={film.id}
              imageFilm={
                "https://image.tmdb.org/t/p/original/" + film.poster_path
              }
              titleFilm={film.title}
              idMovies={film.id}
            />
          );
        })}
      </div>
      <div className="div--pagination row justify-content-center align-items-center">
        <p className="col-12 col-sm-12 align-self-center">
          {" "}
          Page(s) : {currentPages}
        </p>
        <Pagination
          className="row col-12 col-sm-12 justify-content-between nav--pagination"
          activePage={currentPages}
          itemsCountPerPage={20}
          totalItemsCount={totalPages * 20}
          pageRangeDisplayed={10}
          onChange={handleCurentPages}
        />
      </div>
    </div>
  );
};
export default Movies;
