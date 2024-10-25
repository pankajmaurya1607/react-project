import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count*20}`
      );
      const data = await res.json();
      console.log(data);
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div className="product" key={`${item.id}-${index}`}>
                <img src={item.thumbnail} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            ))
          : null}
        <div className="button-container">
          <button disabled={disableButton} onClick={() => setCount(count + 1)}>
            Load More Products
          </button>
          {
            disableButton ? <h3>You have reached 100 products</h3> : null
          }
        </div>
      </div>
    </div>
  );
}