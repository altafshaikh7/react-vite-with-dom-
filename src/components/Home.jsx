import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mt-5 text-center">
      <div className="p-5 bg-light rounded-3 shadow-sm">
        <h1 className="display-4">Welcome to MyApp</h1>
        <p className="lead">
          We provide modern solutions for web, mobile, and design.  
          Build your dream project with us today!
        </p>
        <Link to="/services" className="btn btn-primary btn-lg mt-3">
          Explore Services
        </Link>
      </div>
    </div>
  );
}
