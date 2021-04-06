import React from "react";
import images from '../../../../../assets/img/code/slide.png';

function CodeImage({post}) {
  const styleObj = { 
    backgroundImage: `url(${images})`, 
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: '0px', 
    backgroundPositionX: '-'+((post.type*720)-720)+'px',
  };
  return <div className="code" style={styleObj}></div>;
} 

export default React.memo(CodeImage);