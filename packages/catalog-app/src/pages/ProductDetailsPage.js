import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const parms = useParams();
  return <div>ProductDetailsPage {parms.productId}</div>;
};

ProductDetailsPage.propTypes = {};

export default ProductDetailsPage;
