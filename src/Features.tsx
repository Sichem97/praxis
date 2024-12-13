import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PopularCategories: React.FC = () => {
  const categories = [
    { name: "Design", courses: "1,234", color: "#FFECE6" },
    { name: "Development", courses: "2,345", color: "#E6F2FF" },
    { name: "Business", courses: "1,876", color: "#E6E6FF" },
    { name: "Marketing", courses: "1,543", color: "#FFECE6" },
  ];

  return (
    <div className="container py-5" style={{ backgroundColor: "#F7F9FC" }}>
      <h4 className="mb-5" style={{ fontWeight: "700", color: "#2A2A2A" }}>
        Popular Categories
      </h4>

      {/* Category Cards in Same Line */}
      <div className="d-flex justify-content-start gap-4 flex-wrap">
        {categories.map((category, index) => (
          <div
            className="card p-3 d-flex justify-content-start align-items-center"
            style={{
              borderRadius: "12px",
              border: "1px solid #E0E0E0",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              width: "250px",
              height:"100px",
              flexShrink: 0,
            }}
            key={index}
          >
            {/* Flex container for circle and text */}
            <div className="d-flex align-items-center">
              {/* Circle Icon */}
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  backgroundColor: category.color,
                  borderRadius: "50%",
                  marginRight: "6px",
                  margin:"6px",
                  
                }}
              />
              {/* Category Text */}
              <div>
                {/* Category Name */}
                <h5 className="mb-1" style={{ fontWeight: "700", color: "#2A2A2A" , margin:"2px"}}>
                  {category.name}
                </h5>
                {/* Courses Count */}
                <p style={{ fontSize: "14px", color: "#6C757D", marginBottom: "0" }}>
                  {category.courses} courses
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
