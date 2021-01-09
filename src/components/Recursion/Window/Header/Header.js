import './Header.scss';
import React from "react";

function Header({text}) {

  return (
    <div className="header">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3 test"></div>
    </div>
  );

}

export default Header;