import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ReactLoading from "react-loading";

const CarouselMovies = () => {
  const [listFilm, setListFilm] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=b5be08aabb5691e1522a3bd74604d1ee&language=en-US&page=1"
      )
      .then((dataFilm) => {
        return dataFilm.data.results;
      })
      .then((data) => {
        setListFilm(data);
        setLoading(false);
      });
  }, []);
  // const linkImage = "https://image.tmdb.org/t/p/w1280/";
  const filmTab = listFilm.filter((film, index) => {
    if (index > 0 && index < 4) {
      return film;
    }
    return ""
  });
  return (
    <Carousel className="carousel carousel-container">
      {filmTab.map((film) => {
        
        return (
          loading ? <ReactLoading type="bars" color="#ee5253" height={'20%'} width={'20%'} /> :
          <Carousel.Item  >
            {loading ? <ReactLoading type="bars" color="#ee5253" height={'20%'} width={'20%'} /> :
            <img
              className="d-block w-100 img--carousel"
              src={"https://image.tmdb.org/t/p/original/"+film.backdrop_path}
              alt={film.title}
            />}
            <Carousel.Caption>
              <h3 className="title--film">{film.title}</h3>
              <p>{film.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default CarouselMovies;
