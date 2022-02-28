import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { mount } from "catalog/CatalogApp";

const CatalogApp = ({ history }) => {
  const catalogRef = useRef(null);
  const navigate = useNavigate();
  const onNavigation = (navProps) => {
    navigate(navProps.location.pathname);
  };
  useEffect(() => {
    const { onParentNavigate } = mount(catalogRef.current, { onNavigation });
    const unlisten = history.listen(onParentNavigate);
    return unlisten;
  }, []);
  return <div ref={catalogRef} />;
};

CatalogApp.propTypes = {
  history: PropTypes.object,
};

export default CatalogApp;
