import useFetch from "../use-fetch";
import { useRef } from "react";

export default function ScrollToTopAndBottom() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=200",
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

//   function handleScrollToBottom() {
//     window.scrollTo({
//       top: document.body.scrollHeight,
//       behavior: "smooth",
//     });
//   }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
    }); 
  }

  console.log(data);

  if(loading) {
    return <h1>Loading...</h1>
  }
  if(error) {
    return <h1>Error: {error.message}</h1>
  }

  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <ul style={{listStyle: "none"}}> 
        {data && data.products && data.products.length
          ? data.products.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom section</h3>
    </div>
  );
}
