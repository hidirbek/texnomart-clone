import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Pdp from "../pages/pdp/Pdp";

const index = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:id">
        <Pdp />
      </Route>
    </Switch>
  );
};

export default index;
