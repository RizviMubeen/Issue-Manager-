import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Issue Management System</Link>
    <Link className="navbar-brand" to="/dashboard">Dashboard</Link>

    <button className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="btn btn-outline-light" to="/addissue">Add New Issue</Link>

  </div>
</nav>

    </div>
  )
}
