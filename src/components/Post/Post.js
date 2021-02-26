import './Post.scss';
import React from "react";
import Console from '../Console/Console';
import Dice from '../Dice/Dice';
import Counter from '../Counter/Counter';
import Code from '../Code/Code';
import Recursion from '../Recursion/Recursion';
import PrimaryKey from '../PrimaryKey/PrimaryKey';
import Soap from '../Soap/Soap';
import Comment from './Comment/Comment';

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
        {post.id === 1 && (!codeMode ? <Console /> : <Code post={post} />)}
        {post.id === 2 && (!codeMode ? <Dice /> : <Code post={post} />)}
        {post.id === 3 && (!codeMode ? <Counter /> : <Code post={post} />)}
        {post.id === 4 && (!codeMode ? <Recursion /> : <Code post={post} />)}
        {post.id === 5 && (!codeMode ? <PrimaryKey /> : <Code post={post} />)}
        {post.id === 6 && (!codeMode ? <Soap /> : <Code post={post} />)}
      </div>
      <div className="source-code-button" onClick={() => setCodeMode(!codeMode)}><span>[[ SOURSE CODE ]]</span></div>
      <Comment />
    </div>
  );

}

export default Post;