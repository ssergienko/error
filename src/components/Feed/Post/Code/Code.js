import './Code.scss';
import React from "react";

function Code({post}) {

  return (
    <div className="code">
      <img src={post.image.url} alt="Error" />
    </div>
  );

}

export default Code;