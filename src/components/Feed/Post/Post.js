import './Post.scss';
import React, { useMemo } from "react";
import { 
  Console, 
  Dice, 
  Counter,
  Recursion, 
  PrimaryKey, 
  Soap, 
  Allipsis, 
  Moon,
  Clock 
} from '../../Widgets/index';
import Comment from './Comment/Comment';
import Code from './Code/Code';

const getWidget = (post) => {
  switch(post.type) {
    case 1: return <Console />;
    case 2: return <Dice />;
    case 3: return <Counter />;
    case 4: return <Recursion />;
    case 5: return <PrimaryKey />;
    case 6: return <Soap />;
    case 7: return <Allipsis />;
    case 8: return <Moon />;
    case 9: return <Clock />;
    default: return <Console />;
  }
}

const getCode = (post) => {
  return <Code post={post} />;
};

function Post({post, myref}) {

  const [codeMode, setCodeMode] = React.useState(false);
  const code = useMemo(() => getCode(post), [post]);
  const widget = useMemo(() => getWidget(post), [post]);

  if(!post) return (<div>Error Occured.</div>);

  return (
    <div className="post" ref={myref}>
      <div className="author">
        <div className="avatar"><span>?</span></div>
        <div className="name-and-date">
          <div className="name">{post.author.firstname} {post.author.surname}</div>
          <div className="date">{post.author.date}</div>
        </div>
      </div>
      <div className="text">{post.text}</div>
      <div className="widget" id="widget">
        <div className="code-wrapper" style={{display: !codeMode ? 'none' : 'block'}}>{code}</div>
        <div className="widget-wrapper" style={{display: codeMode ? 'none' : 'block'}}>{widget}</div>
      </div>
      <div className="source-code-button" onClick={() => setCodeMode(!codeMode)}><span>[ CODE ]</span></div>
      <Comment />
    </div>
  );

}

export default React.memo(Post);