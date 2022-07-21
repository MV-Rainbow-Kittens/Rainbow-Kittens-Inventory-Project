import React, { useState, useEffect } from "react";
import "../css/Search.css";
import axios from "axios";
import Card from './CardComponent';

function Search() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/users/search?last_name=${users}`
      );
      console.log(response)
      setUsers(response.data.usersFound);
      setLoading(false);
    };

    loadUsers();
  }, []);

  return (
    <div className="container">
      <input className="search_input"
        type="text"
        placeholder="Search by Last Name..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <div className='cardContainer'>
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        users
        .sort((a,b) => a.last_name > b.last_name ? 1 : -1)
          .filter((value) => {
            console.log('value:', value)
            console.log('searchTitle:', searchTitle)
            if (value.last_name.toLowerCase().includes(searchTitle.toLowerCase())) {
              return value;
            }
          })
          .map((item) => {
                console.log('item:', item);
                return (   
                            <Card key={item.id} user={item} /> 
                );
            })
      )}
      </div>
    </div>
  );
}

export default Search;