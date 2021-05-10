import React from "react";
import "./sass/main.scss";
import Header from "./component/Header";
import Mainhome from "./component/MainHome";
import { Switch, Route} from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Movies from "./component/Movies";

export const filmPopularContext = React.createContext();
const App = () => {
  const [listMoviesPopular, setlistMoviesPopular] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=b5be08aabb5691e1522a3bd74604d1ee&language=en-US&page=1"
      )
      .then((dataFilm) => {
        return dataFilm.data.results;
      })
      .then((data) => {
        setlistMoviesPopular(data);
      });
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <filmPopularContext.Provider value={listMoviesPopular}>
          <Route exact path="/">
            <Mainhome />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
        </filmPopularContext.Provider>
      </Switch>
    </>
  );
};
export default App;
