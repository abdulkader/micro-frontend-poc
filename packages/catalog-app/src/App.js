import React, { Suspense, lazy, Fragment } from "react";
import PropTypes from "prop-types";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import AppErrorBoundary from "uiComponents/AppErrorBoundary";

const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
const CatalogApp = ({ history }) => {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading</div>}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="/product/:productId"
              element={
                <AppErrorBoundary errorMessage="Error loading product details page">
                  <Link to="/">Cateogry</Link>
                  <Link to="/product/123">Product</Link>
                  <Link to="/product/123?query=123">Product</Link>
                  <ProductDetailsPage />
                </AppErrorBoundary>
              }
            />
            <Route
              path="/"
              element={
                <AppErrorBoundary errorMessage="Error loading category">
                  <Link to="/">Cateogry</Link>
                  <Link to="/product/123">Product</Link>
                  <Link to="/product/123?query=123">Product</Link>
                  <CategoryPage />
                </AppErrorBoundary>
              }
            />
          </Routes>
        </HistoryRouter>
      </Suspense>
    </Fragment>
  );
};

CatalogApp.propTypes = {
  history: PropTypes.object,
};

export default CatalogApp;
