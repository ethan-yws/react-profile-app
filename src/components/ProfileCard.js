import React, { useState, useEffect } from "react";
import "../styles/ProfileCard.css";

function ProfileCard({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
        //console.log(item);
    };

    return (
        <div className="profile-card">
            <h2>{item.name}</h2>
            <p>id: {item.id}</p>
            <p>username: {item.username}</p>
            <p>email: {item.email}</p>
            <p>phone: {item.phone}</p>
            <p>website: {item.website}</p>
        </div>
    );
}

export default ProfileCard
