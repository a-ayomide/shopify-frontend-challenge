import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageLoader } from "../components/Loaders";
import PublicRoute from "../layouts/PublicRoute";
import Error404 from "../components/Error404";

// create Loadable pages
const Home = lazy(() => import("../pages/home/Home"));

const Routes = () => (
  // eslint-disable-next-line no-undef
  <Router basename={process.env.PUBLIC_URL}>
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <Route component={Error404} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
