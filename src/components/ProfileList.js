import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../styles/ProfileList.css"

function ProfileList() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");

    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div className="profile-list">
      <h2>Profiles List</h2>
      {items.map(item => (
        <p key={item.id}>
          <Link to={`/profiles/${item.id}`}>{item.name}</Link>
        </p>
      ))}
    </div>
  );
}

export default ProfileList



