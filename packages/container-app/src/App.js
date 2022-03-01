import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import AppErrorBoundary from "uiComponents/AppErrorBoundary";
import Header from "uiComponents/Header";
import Footer from "uiComponents/Footer";

const CatalogApp = lazy(() => import("./apps/CatalogApp"));

const history = createBrowserHistory();

const ContainerApp = () => {
  return (
    <AppErrorBoundary>
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <Router history={history}>
          <Switch>
            <Route path="/*">
              <AppErrorBoundary errorMessage="Error loading catalog application">
                <CatalogApp />
              </AppErrorBoundary>
            </Route>
          </Switch>
        </Router>
      </Suspense>
      <Footer />
    </AppErrorBoundary>
  );
};

ContainerApp.propTypes = {
  history: PropTypes.object,
};

export default ContainerApp;
