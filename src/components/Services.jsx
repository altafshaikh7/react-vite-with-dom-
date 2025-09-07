import React from "react";

export default function Services() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Our Services</h2>
      <div className="row">
        
        {/* Service 1 */}
        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                We build modern, responsive, and scalable web applications using
                the latest technologies like React, Node.js, and MongoDB.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Mobile App Development</h5>
              <p className="card-text">
                Create seamless and user-friendly mobile apps for both Android
                and iOS platforms with React Native and Flutter.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">UI/UX Design</h5>
              <p className="card-text">
                Our creative team designs clean, engaging, and interactive UI/UX
                to deliver the best user experience.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
