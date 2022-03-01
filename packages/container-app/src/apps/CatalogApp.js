import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "catalog/CatalogApp";

const CatalogApp = () => {
  const catalogRef = useRef(null);
  const history = useHistory();
  const onNavigation = (location) => {
    history.push(location.pathname);
  };
  useEffect(() => {
    const { onParentNavigate } = mount(catalogRef.current, {
      initialPath: history.location.pathname,
      onNavigation,
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={catalogRef} />;
};

export default CatalogApp;
