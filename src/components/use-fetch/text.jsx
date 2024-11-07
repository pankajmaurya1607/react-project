import UseFetch from ".";

export default function UseFetchHookTest() {
  const { data, loading, error } = UseFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  console.log(data, loading, error);

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {loading ? <h1>Loading...</h1> : null}
      {error ? <h1>Error</h1> : null}
      {data && data.products && data.products.length 
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}
