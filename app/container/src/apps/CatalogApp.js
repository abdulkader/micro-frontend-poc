import React, { useEffect, useRef } from "react";
import { mount } from "catalog/CatalogApp";

const CatalogApp = () => {
  const catalogRef = useRef(null);
  useEffect(() => {
    if (catalogRef.current) {
      mount(catalogRef.current);
    }
  }, []);
  return <div ref={catalogRef} />;
};

export default CatalogApp;
