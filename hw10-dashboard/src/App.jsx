import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://jsonplaceholder.typicode.com/users/1";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("API request failed");
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  setTimeout(() => {
    console.assert(document.querySelector("h1"), "Heading missing");
    console.assert(data && data.name, "Data not loaded");
    console.assert(!loading, "Still loading");
  }, 1000);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>City: {data.address.city}</p>
    </div>
  );
}