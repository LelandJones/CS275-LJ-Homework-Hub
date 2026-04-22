import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //const API_URL = "https://api.github.com/users/octocat";
  const API_URL = "https://api.github.com/users/octoct";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("GitHub user not found");
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

  // ------------------------
  // Assertions
  // ------------------------
  setTimeout(() => {
    console.assert(
      document.querySelector("h1"),
      "❌ Heading is missing"
    );

    console.assert(
      data && data.login,
      "❌ GitHub user data not loaded"
    );

    console.assert(
      !loading,
      "❌ Still stuck in loading state"
    );
  }, 1000);

  // ------------------------
  // STATES
  // ------------------------

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>GitHub User Dashboard</h1>

      <img
        src={data.avatar_url}
        alt="avatar"
        width="100"
      />

      <p><strong>Username:</strong> {data.login}</p>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Company:</strong> {data.company}</p>
      <p><strong>Public Repos:</strong> {data.public_repos}</p>
      <p><strong>Followers:</strong> {data.followers}</p>
      <p><strong>Following:</strong> {data.following}</p>


      <a href={data.html_url} target="_blank">
        View Profile
      </a>
    </div>
  );
}