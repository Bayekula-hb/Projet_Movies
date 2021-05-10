import { useContext } from "react";
import { Link } from "react-router-dom";
import { filmPopularContext } from "../app";
import CardFilm from "./Card/CardFilm";
import CarouselMovies from "./Carousel";
import MenuComedy from "./Menu/MenuComedy";
import SectionMovies from "./section/SectionMovies";

const Mainhome = () => {
  const films = useContext(filmPopularContext);
  const linkImage = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  return (
    <>
      <CarouselMovies />
      <main className="container-fluid">
        <SectionMovies
           titleSection="Action & Adventure"
          menu={<MenuComedy />}
          menu2={<Link to="/comedy">Plus de Film</Link>}
          cardMovie={films.map((film, index) => {
            if (index < 4) {
              return (
                <CardFilm 
                  key={film.id}
                  imageFilm={linkImage + film.backdrop_path}
                  titleFilm={film.title}
                  idMovies={film.id}
                />
              );
            }
          })}
        />
      </main>
    </>
  );
};
export default Mainhome;
