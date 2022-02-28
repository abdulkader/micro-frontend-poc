import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import AppErrorBoundary from "uiComponents/AppErrorBoundary";
import Header from "uiComponents/Header";
import Footer from "uiComponents/Footer";

const CatalogApp = lazy(() => import("./apps/CatalogApp"));
const ContainerApp = ({ history }) => {
  return (
    <AppErrorBoundary>
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="/*"
              element={
                <AppErrorBoundary errorMessage="Error loading catalog application">
                  <CatalogApp history={history} />
                </AppErrorBoundary>
              }
            />
          </Routes>
        </HistoryRouter>
      </Suspense>
      <Footer />
    </AppErrorBoundary>
  );
};

ContainerApp.propTypes = {
  history: PropTypes.object,
};

export default ContainerApp;
