import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../static";
import "./Products.css";
import ProductWrapper from "../product-wrapper/ProductWrapper";
import { db } from "../../server";
import { collection, getDocs } from "firebase/firestore";

function Products() {
  const [data, setData] = useState([]);
  const productRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const fetchData = await getDocs(productRef);
      setData(fetchData.docs.map((item) => ({ id: item.id, ...item.data() })));
    };
    getProducts();
  }, []);

  return (
    <div className="container">
       <ProductWrapper data={data} /> 
    </div>
  );
}

export default Products;