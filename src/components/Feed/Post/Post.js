import './Post.scss';
import React from "react";
import { 
  Console, 
  Dice, 
  Counter,
  Recursion, 
  PrimaryKey, 
  Soap, 
  Allipsis, 
  Moon 
} from '../../Widgets/index';
import Comment from './Comment/Comment';
import Code from './Code/Code';

function Post({post, myref}) {

  const [codeMode, setCodeMode] = React.useState(false);

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
        {post.type === 1 && (!codeMode ? <Console /> : <Code post={post} />)}
        {post.type === 2 && (!codeMode ? <Dice /> : <Code post={post} />)}
        {post.type === 3 && (!codeMode ? <Counter /> : <Code post={post} />)}
        {post.type === 4 && (!codeMode ? <Recursion /> : <Code post={post} />)}
        {post.type === 5 && (!codeMode ? <PrimaryKey /> : <Code post={post} />)}
        {post.type === 6 && (!codeMode ? <Soap /> : <Code post={post} />)}
        {post.type === 7 && (!codeMode ? <Allipsis /> : <Code post={post} />)}
        {post.type === 8 && (!codeMode ? <Moon /> : <Code post={post} />)}
      </div>
      <div className="source-code-button" onClick={() => setCodeMode(!codeMode)}><span>[ CODE ]</span></div>
      <Comment />
    </div>
  );

}

export default Post;