import { Link } from "react-router-dom";
import Ul, { Li } from "../Ul";

const MenuDrama = ()=>{

    return(
        <Ul
          className="menu--list row "
          contentUl1={
            <Li
              className="Li Li-home col-6 col-md-auto"
              contentLi={
                <Link className="link link--home" to="/movies/drama">
                  Featured
                </Link>
              }
            />
          }
          contentUl2={
            <Li
              className="Li Li-home col-12 col-md-6"
              contentLi={
                <Link className="link link--movies" to="/movies/drama">
                  {" "}
                  Comming Soon{" "}
                </Link>
              }
            />
          }
        
        />
    )
}
export default MenuDrama;