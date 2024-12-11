import React from 'react';
import "./StepsSection";

const Header: React.FC = () => {
  return (
    <header className="p-3 text-bg-">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8"/>
        </svg>
            Praxis</h1>
        </a>
        
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-4 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary">Browse</a></li>
          <li><a href="#" className="nav-link px-2 text-darkbleu">Categories</a></li>
          <li><a href="#" className="nav-link px-2 text-darkbleu">Teach</a></li>
          <li><a href="#" className="nav-link px-2 text-darkbleu">Enteprise</a></li>
        </ul>

        

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2 text-dark" >Login</button>
          <button type="button" className="btn btn-sign">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
