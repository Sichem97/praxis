import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Appcon.css"

const HeroSection: React.FC = () => {
  return (
    <div className="container-fluid text-light py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">Learn Without Limits</h1>
          <p className="lead">Master new skills from expert instructors</p>
          <div className="mt-4">
            <input
              type="text"
              className="form-control form-control-lg rounded-pill"
              placeholder="Search for courses..."
              style={{ maxWidth: "400px" }}
            />
          </div>
          <div className="d-flex justify-content-space-between gap- mt-4">
            <div>
              <h3 className="fw-bold text-warm">5M+</h3>
              <p>Students</p>
            </div>
            <div>
              <h3 className="fw-bold text-warm">1000+</h3>
              <p>Courses</p>
            </div>
            <div>
              <h3 className="fw-bold text-warm">50+</h3>
              <p>Categories</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="bg-secondary rounded"
            style={{ height: "250px", width: "90%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
