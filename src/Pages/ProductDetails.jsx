import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const [products, setProducts] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/items/${id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <div>{products.brand}</div>;
};

export default ProductDetails;
