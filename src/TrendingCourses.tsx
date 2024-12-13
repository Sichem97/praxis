import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Trending.css";
interface CourseProps {
  title: string;
  instructor: string;
  rating: number;
  price: number;
  isBestseller?: boolean;
  isNewCourse?: boolean;
  isPopular?: boolean;
  buttonColor: string;
  topDivColor: string;
  priceColor: string; 
}
const CourseCard: React.FC<CourseProps> = ({
  title,
  instructor,
  rating,
  price,
  isBestseller,
  isNewCourse,
  isPopular,
  buttonColor,
  topDivColor,
  priceColor,
}) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        {/* Custom top color */}
        <div
          className="top-color"
          style={{
            backgroundColor: topDivColor,
          }}
        ></div>
        <div className="body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {instructor} - {rating}
            <span className="text-warning"> ★</span>
          </p>
          {/* Price with unique color */}
          <p className="price" style={{ color: priceColor, fontWeight: "bold" }}>
            ${price.toFixed(2)}
          </p>

          {/* Conditional buttons */}
          {isBestseller && (
            <a href="#" className="btn text-white" style={{ backgroundColor: buttonColor }}>
              Bestseller
            </a>
          )}
          {isPopular && (
            <a href="#" className="btn text-white" style={{ backgroundColor: buttonColor }}>
              Popular
            </a>
          )}
          {isNewCourse && (
            <a href="#" className="btn text-white" style={{ backgroundColor: buttonColor }}>
              New Course
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
const TrendingCourses: React.FC = () => {
  const courses = [
    {
      title: "UX Design Fundamentals",
      instructor: "Sarah Chen",
      rating: 4.9,
      price: 89.99,
      isBestseller: true,
      buttonColor: "#ff7043",
      topDivColor: "#1A325A",
      priceColor: "#d32f2f",  
    },
    {
      title: "Python for Data Science",
      instructor: "Michael Rodriguez",
      rating: 4.7,
      price: 79.99,
      isPopular: true,
      buttonColor: "#3f51b5",
      topDivColor: "#3f51b5",
      priceColor: "#3f51b5", 
    },
    {
      title: "Full-Stack Web Development",
      instructor: "Emma Wilson",
      rating: 4.8,
      price: 99.99,
      isNewCourse: true,
      buttonColor: "#4caf50",
      topDivColor: "#4caf50",
      priceColor: "#4caf50",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-start mb-4">Trending Courses</h2>
      <div className="row">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default TrendingCourses;
