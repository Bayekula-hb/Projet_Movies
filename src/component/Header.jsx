import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  const MyHeader = styled.header`
    font-size: 2rem;
    background-color :#2f3542;
}
  `;
  return (
    <MyHeader>
      <nav className="navbar navbar-expand-lg navbar-light  row justify-content-around" >
        <h1 className="navbar-brand col-1"><Link className="link link--h1" to="/"> H-Cine  </Link></h1>
        <button
          className="navbar-toggler col-6"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  col-7 row justify-content-between" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 col-4">
            <li className="nav-item active col-6">
              <Link className="link--home nav-link" to="/"> Home  <span className="sr-only">(current)</span> </Link>
            </li>
            <li className="nav-item col-5">
              <Link className="nav-link link--movies" to="/movies"> Movies </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 col-12  col-sm-6">
            <input
              className="form-control mr-sm-2 col-6 col-sm-6 "
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 col-6 col-sm-4"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </MyHeader>
  );
};
export default Header;
