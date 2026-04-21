const { useState, useEffect } = React;

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/octocat")
    //fetch("https://api.github.com/users/INVALID_USER")
      .then((res) => {
        console.assert(res !== null, "Response should exist");

        if (!res.ok) {
          throw new Error("Fetch failed");
        }

        return res.json();
      })
      .then((data) => {
        console.assert(data.login !== undefined, "Login should exist");

        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.assert(err !== null, "Error should be caught");

        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return React.createElement("h2", { id: "loading" }, "Loading...");
  }

  if (error) {
    return React.createElement("h2", { id: "error" }, "Error: " + error);
  }

  // Success state
  return React.createElement("div", null, [
    React.createElement("h1", { key: 1, id: "heading" }, "GitHub Dashboard"),

    React.createElement("p", { key: 2 }, "User: " + data.login),

    React.createElement(
      "p",
      { key: 3, id: "followers" },
      "Followers: " + data.followers
    ),

    React.createElement(
      "p",
      { key: 4 },
      "Public Repos: " + data.public_repos
    ),

    // Assertions (DOM checks)
    console.assert(
      document.getElementById("heading") !== null,
      "Heading should exist"
    ),

    console.assert(
      document.getElementById("followers") !== null,
      "Followers should render"
    ),

    console.assert(
      data.followers >= 0,
      "Followers should be a valid number"
    )
  ]);
}

// Render app
ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App)
);