import React from "react";

export default function Home() {
  return (
    <div className="container mt-5 text-center">
      <div className="p-5 bg-light rounded-3 shadow-sm">
        <h1 className="display-4">Welcome to MyApp</h1>
        <p className="lead">
          We provide modern solutions for web, mobile, and design.  
          Build your dream project with us today!
        </p>
        <a href="/services" className="btn btn-primary btn-lg mt-3">
          Explore Services
        </a>
      </div>
    </div>
  );
}
