import { useState, useEffect } from "react";
import axios from "axios";
import CardFilm from "./Card/CardFilm";
import Pagination from "react-js-pagination";

const Movies = () => {
  const [listFilmPopular, setlistFilmPopular] = useState([]);
  const [resultFilmSearch, setResultFilmSearch] = useState([]);
  const [currentPages,setCurrentPages] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=b5be08aabb5691e1522a3bd74604d1ee&language=en-US&page=${currentPages}`
      )
      .then((requetefilm) => {
        return requetefilm.data;
      })
      .then((films) => {
        setlistFilmPopular(films.results);
        setResultFilmSearch(films);
        setTotalPages(films.total_pages);
      });
  }, [currentPages]);
  console.log("totals ",totalPages);
  const handleCurentPages = (pageNumber)=>{
    setCurrentPages(pageNumber);
  }

  return (
    <div className="main--movies row">
      <h2 className="col-12">all movies</h2>

      <div className="row col-12 justify-content-between container--film">
        {listFilmPopular.map((film) => {
          return (
            <CardFilm
              key={film.id}
              imageFilm={
                "https://image.tmdb.org/t/p/original/" + film.backdrop_path
              }
              titleFilm={film.title}
              idMovies={film.id}
            />
          );
        })}
      </div>
      <Pagination className="row justify-content-between"
          activePage={currentPages}
          itemsCountPerPage={20}
          totalItemsCount={totalPages}
          pageRangeDisplayed={10}
          onChange={handleCurentPages}
        />
      {/* <UsePagination items={30} /> */}
    </div>
  );
};
export default Movies;
