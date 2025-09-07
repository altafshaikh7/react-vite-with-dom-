import React from "react";

export default function Contact() {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form>
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Your Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
}
