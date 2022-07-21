import React, { useState, useEffect } from "react";
import "../css/Search.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/users/search?last_name=${users}`
      );
      setUsers(Response.data.usersFound);
      setLoading(false);
    };

    loadUsers();
  }, []);

  return (
    <div className="App">
      <h3>Search</h3>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        users
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => <h5 key={item.id}>{item.title}</h5>)
      )}
    </div>
  );
}

export default App;