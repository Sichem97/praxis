import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CareerLearningPaths.css";

interface CareerPath {
  title: string;
  courses: number;
  duration: string;
  description: string;
  buttonText: string;
  buttonColor: string;
}

const careerPaths: CareerPath[] = [
  {
    title: "UX Designer",
    courses: 8,
    duration: "6 months",
    description: "Learn user research, wireframing...",
    buttonText: "Start Learning",
    buttonColor: "#ff7043",
  },
  {
    title: "Data Scientist",
    courses: 10,
    duration: "8 months",
    description: "Master Python, ML, and data analysis",
    buttonText: "Start Learning",
    buttonColor: "#3f51b5",
  },
  {
    title: "Full-Stack Developer",
    courses: 12,
    duration: "9 months",
    description: "Build web apps from front to back",
    buttonText: "Start Learning",
    buttonColor: "#4caf50",
  },
  {
    title: "Cloud Architect",
    courses: 9,
    duration: "7 months",
    description: "Design scalable cloud solutions",
    buttonText: "Start Learning",
    buttonColor: "#673ab7", 
  },
];

const CareerLearningPaths: React.FC = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-start">Career Learning Paths</h2>
      <div className="row justify-content-start">
        {careerPaths.map((path, index) => (
          <div key={index} className="col-md-3 mb-4 d-gap">
            <div className="card shadow-sm w-100">
              <div className="card-body text-start">
                <h5 className="card-title fw-bold mb-2">{path.title}</h5>
                <p className="text-muted mb-1">
                  {path.courses} Courses &bull; {path.duration}
                </p>
                <p className="text-muted small mb-3">{path.description}</p>
                <button
                  className="btn text-white w-100"
                  style={{ backgroundColor: path.buttonColor }}
                >
                  {path.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerLearningPaths;
