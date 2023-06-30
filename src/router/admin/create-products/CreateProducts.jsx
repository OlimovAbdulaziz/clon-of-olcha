import React, { useRef, useState } from "react";
import { db } from "../../../server";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function CreateProduct() {
  // controlled form | component
  const [title, setTitle] = useState("");
  // uncontrolled form | component
  const price = useRef();
  const url = useRef();

  //   database da katta array ochish uchun yani database
  const productRef = collection(db, "products");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let newProduct = {
      title,
      price: +price.current.value,
      url: url.current.value,
    };
    await addDoc(productRef, newProduct)
      .then((res) => {
        console.log(res);
        setTitle("");
        price.current.value = "";
        url.current.value = "";
        toast.success("Mahsulot saqlandi!");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="create__product">
      <h2>CreateProduct</h2>
      <form onSubmit={handleSubmit} action="" className="form__control">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          required
          placeholder="title"
        />
        <input ref={price} type="number" required placeholder="price" />
        <input ref={url} type="text" required placeholder="url" />
        <button disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
      </form>
    </div>
  );
}

export default CreateProduct;