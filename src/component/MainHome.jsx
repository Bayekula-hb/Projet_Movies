import { useContext } from "react";
import { Link } from "react-router-dom";
import { filmPopularContext } from "../app";
import CardFilm from "./Card/CardFilm";
import CarouselMovies from "./Carousel";
import MenuAction from "./Menu/MenuAction";
import MenuComedy from "./Menu/MenuComedy";
import MenuDrama from "./Menu/MenuDrama";
import SectionMovies from "./section/SectionMovies";

const Mainhome = () => {
  const films = useContext(filmPopularContext);
  // const linkImage = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  return (
    <>
      <CarouselMovies />
      <main className="container-fluid">
        <SectionMovies
        nameSection="section--action"
          titleSection="Action & Adventure"
          menu={<MenuAction />}
          menu2={<Link to="/action" className="link--plus">Plus de Film</Link>}
          cardMovie={films.map((film, index) => {
            if (index < 4) {
              return (
                <CardFilm 
                  key={film.id}
                  imageFilm={"https://image.tmdb.org/t/p/original/"+ film.backdrop_path}
                  titleFilm={film.title}
                  idMovies={film.id}
                />
              );
            }
            return "";
          })}
        />
        <SectionMovies
          nameSection="section--drama"
          titleSection="drama & romance"
          menu={<MenuDrama />}
          menu2={<Link to="/action" className="link--plus">Plus de Film</Link>}
          cardMovie={films.map((film, index) => {
            if (index < 4) {
              return (
                <CardFilm 
                  key={film.id}
                  imageFilm={"https://image.tmdb.org/t/p/original/"+ film.backdrop_path}
                  titleFilm={film.title}
                  idMovies={film.id}
                />
              );
            }
            return "";
          })}
        />
        <SectionMovies
          nameSection="section--comedy"
          titleSection="comedy & horror"
          menu={<MenuComedy />}
          menu2={<Link to="/comedy" className="link--plus">Plus de Film</Link>}
          cardMovie={films.map((film, index) => {
            if (index < 4) {
              return (
                <CardFilm 
                  key={film.id}
                  imageFilm={"https://image.tmdb.org/t/p/original/"+ film.backdrop_path}
                  titleFilm={film.title}
                  idMovies={film.id}
                />
              );
            }
            return "";
          })}
        />
      </main>
    </>
  );
};
export default Mainhome;
