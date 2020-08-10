import React from "react";
import {AppBody} from "./styled";
import {  Route } from "react-router-dom";
import routes from "./routers"
const Header = ({}) => {
  return (
    <AppBody>
      {routes.map((route, idx) => {
        return route.component ? (
          <Route
            key={idx}
            path={route.path}
            exact={route.exact}
            name={route.name}
            render={(props) => <route.component {...props} />}
          />
        ) : null;
      })}
    </AppBody>
  );
};
export default Header;
