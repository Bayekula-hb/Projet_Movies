import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Movies from "./Movies";
import { Link } from "react-router-dom";
import { filmPopularContext } from "../app";
import React from "react";
import { useState } from "react";
import ReactLoading from "react-loading";
import { useEffect } from "react";

const DetailsMovie = (props) => {
  console.log(props);
  const [loading, setLoading] = useState(true);
  const divMovie = styled.div`
    background-image: ${`https://image.tmdb.org/t/p/original/ +${props.poster_path}`};
  `;
  function isObjet(objet) {
    return Object.keys(objet).length === 0;
  }
  function loadingFunc() {
    if (!isObjet(props)) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }
  useEffect(() => {
    loadingFunc();
  }, [props]);
  const divLoading = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 3%;
    padding-top: 15%;
    top: 12vh;
  `;
  return loading ? (
    <divLoading className="div--react--loading">
      <ReactLoading
        type="spokes"
        color="#2F3542"
        height={600}
        width={370}
        className="align-selft-center reactLoading"
      />
    </divLoading>
  ) : (
    <div className="row main--movies">
      <div className="row container--film--details">
        {/* <img src={"https://image.tmdb.org/t/p/original/" + props.poster_path} alt={props.title} className="img--background col-12"/> */}
        <Link to="/movies" className="btn--back">
          <i class="fas fa-backspace"></i>
        </Link>
        <div className="row justify-content-between container--film--details--div">
          <h2 className="col-12">{props.title}</h2>
          <img
            className="col-4"
            src={"https://image.tmdb.org/t/p/original/" + props.poster_path}
            alt={props.title}
          />
          <div className="col-8 align-items-end row justify-content-start container--title">
            <p className="para-overview col-12">{props.overview}</p>
            <span className="col-12">
              Date de sortie : {props.release_date}
            </span>
            <span className="col-12">Popularité : {props.popularity} </span>
            <p className="companyProduction col-12">
              <h3 className="col-12">Genre</h3>
              <ul className="col-12 row">
                {props.genres.map((genre) => (
                  <li className="col-12">{genre.name}</li>
                ))}
              </ul>
            </p>
            <p className="companyProduction col-12">
              <h3 className="col-12">Maison de Production</h3>
              <ul className="col-12 row">
                {props.production_companies.map((compagnie) => (
                  <li className="col-12">{compagnie.name}</li>
                ))}
              </ul>
            </p>
          </div>

          {/* <p>
            Genre
          </p> */}
        </div>
      </div>
    </div>
  );
};
export default DetailsMovie;