import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <h1>Welcome</h1>
            <Link to="/profiles">
            <h2>Check Profiles</h2>
            </Link>
        </div>
    )
}

export default Home
