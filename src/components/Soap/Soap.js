import './Soap.scss';
import React from "react";

function Soap() {

  return (
    <div className="soap-and-towel-wrapper">
      <div className="block draggable">
        <img src="https://anerror.s3.amazonaws.com/towel.png" width="200" alt="image-1" />
      </div>
      <div className="block question-mark">
        <span>?</span>
      </div>
      <div className="block draggable">
        <img src="https://anerror.s3.amazonaws.com/soap.png" width="200" alt="image-2" />
      </div>
    </div>
  );

}

export default Soap;
