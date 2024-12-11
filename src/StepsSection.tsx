import React from 'react';
import "./StepsSection.css"

const StepsSection: React.FC = () => {
  return (
    <div className="container my-5">
      <h2 className="text-start fw-bold">How Praxis Works</h2>
      <p className="text-start text-muted"  style={{fontSize: '15px' }}>
        Your journey to success in 4 simple steps
      </p>
      <div className="row justify-content-center mt-5">
        {/* Step 1 */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="text-center p-4 border rounded shadow-sm">
            <div
              className="rounded-circle  text-white d-flex justify-content-center align-items-center mx-auto"
              style={{ width: '60px', height: '60px', fontSize: '24px' }}
            >
              1
            </div>
            <h5 className="mt-3">Choose Your Path</h5>
            <p className="text-muted">
              Explore our curated learning paths and courses
            </p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="text-center p-4 border rounded shadow-sm">
            <div
              className="rounded-circle text-white d-flex justify-content-center align-items-center mx-auto"
              style={{ width: '60px', height: '60px', fontSize: '24px' }}
            >
              2
            </div>
            <h5 className="mt-3">Personalize</h5>
            <p className="text-muted">
              Take a skill assessment and get your learning plan
            </p>
          </div>
        </div>
        {/* Step 3 */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="text-center p-4 border rounded shadow-sm">
            <div
              className="rounded-circle text-white d-flex justify-content-center align-items-center mx-auto"
              style={{ width: '60px', height: '60px', fontSize: '24px' }}
            >
              3
            </div>
            <h5 className="mt-3">Learn and Practice</h5>
            <p className="text-muted">
              Access interactive lessons and hands-on projects
            </p>
          </div>
        </div>
        {/* Step 4 */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="text-center p-4 border rounded shadow-sm">
            <div
              className="rounded-circle text-white d-flex justify-content-center align-items-center mx-auto"
              style={{ width: '60px', height: '60px', fontSize: '24px' }}
            >
              4
            </div>
            <h5 className="mt-3">Get Certified</h5>
            <p className="text-muted">
              Earn industry-recognized certificates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
