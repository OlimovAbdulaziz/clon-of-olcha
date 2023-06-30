import React, { useEffect, useState } from "react";
import { db } from "../../../server";
import { collection, getDocs } from "firebase/firestore";
import ProductWrapper from "../../../components/product-wrapper/ProductWrapper";
import { useSelector } from "react-redux";

function ManagaProduct() {
  const [data, setData] = useState([]);
  const productRef = collection(db, "products");
  const proReload = useSelector((s) => s.proReload.value);

  useEffect(() => {
    const getProducts = async () => {
      const fetchData = await getDocs(productRef);
      setData(fetchData.docs.map((item) => ({ id: item.id, ...item.data() })));
    };
    getProducts();
  }, [proReload]);

  return (
    <div style={{ padding: 30 }}>
      <h2>Manage Product</h2>
       <ProductWrapper admin={true} data={data} />  
    </div>
  );
}

export default ManagaProduct;