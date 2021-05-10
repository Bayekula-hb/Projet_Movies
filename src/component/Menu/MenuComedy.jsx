import { Link } from "react-router-dom";
import Ul, { Li } from "../Ul";

const MenuComedy = ()=>{

    return(
        <Ul
          className="menu--list"
          contentUl1={
            <Li
              className="Li Li-home col-md-auto"
              contentLi={
                <Link className="link link--home" to="/">
                  Featured
                </Link>
              }
            />
          }
          contentUl2={
            <Li
              className="Li Li-home col-12 col-md-6"
              contentLi={
                <Link className="link link--movies" to="/movies">
                  {" "}
                  Comming Soon{" "}
                </Link>
              }
            />
          }
        
        />
    )
}
export default MenuComedy;