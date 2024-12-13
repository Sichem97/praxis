import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer: React.FC = () => {
  return (
    <div style={{textAlign:"center"}} className="container-fluid text-light py-2">
      <p style={{padding:"10px", height:"10px"}}>© 2024 Praxis. All rights reserved.</p>
    </div>
  );
};

export default Footer;
