import './Code.scss';
import React, { useEffect } from "react";

function Code({post}) {

  return (
    <div className="code">
      <img src={post.image.url} />
    </div>
  );

}

export default Code;
