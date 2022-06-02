import React from 'react'
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="page">
        <p>Home</p>
        <Link to="/donate">Donate</Link> |{" "}
        <Link to="/about">About</Link>
    </div>

  )
}

export default HomePage