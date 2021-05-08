import "./sass/main.scss";
import Header from "./component/Header";
import Mainhome from "./component/MainHome";
import { Switch, Route } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Mainhome />
        </Route>
      </Switch>
    </>
  );
};
export default App;
