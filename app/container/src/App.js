import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const CatalogApp = lazy(() => import("./apps/CatalogApp"));
import AppErrorBoundary from "./components/AppErrorBoundary/index";

const ContainerApp = () => {
  return (
    <AppErrorBoundary>
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <AppErrorBoundary errorMessage="Error loading catalog application">
                  <CatalogApp />
                </AppErrorBoundary>
              }
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
      <Footer />
    </AppErrorBoundary>
  );
};

export default ContainerApp;
