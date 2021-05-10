import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


const CardFilm = ({imageFilm, titleFilm, overviewFilm, idMovies, clickCard}) => {

  return (
    <Card style={{ width: "22rem" }} className="col-12 col-sm-auto align-self-center card--film">
      <Card.Img variant="top" src={imageFilm} className="image--card"/>
      <Card.Body>
        <Card.Title>{titleFilm}</Card.Title>
        <Card.Text>
            {overviewFilm}
        </Card.Text>
        <Link variant="primary" onClick={clickCard} to={`/movies/${idMovies}`}>Plus</Link>
      </Card.Body>
    </Card>
  );
};
export default CardFilm;
