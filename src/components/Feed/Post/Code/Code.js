import './Code.scss';
import React, { useMemo } from "react";
import CodeImage from './CodeImage/CodeImage';

const getStyle = (post) => {
  return <CodeImage post={post} />;
}

function Code({post}) {
  const codeImage = useMemo(() => getStyle(post), [post]);
  return (<div className="code-image">{codeImage}</div>);
}

export default React.memo(Code);
