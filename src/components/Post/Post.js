import './Post.scss';
import React from "react";
import Console from '../Console/Console';
import Dice from '../Dice/Dice';
import Counter from '../Counter/Counter';
import Code from '../Code/Code';
import Recursion from '../Recursion/Recursion';
import PrimaryKey from '../PrimaryKey/PrimaryKey';
import MyBook from '../Book/Book';

function Post({post}) {

  const [codeMode, setCodeMode] = React.useState(false);
  const toggleCodeMode = (postId) => {
    if(!postId) {
      setCodeMode(!codeMode);
    }
  }

  return (
    <div className="post">
      <div className="author">
        <div className="avatar"><span>?</span></div>
        <div className="name">{post.author.firstname} {post.author.surname}</div>
      </div>
      <div className="text">{post.text}</div>
      <div className="widget" id="widget">
        {post.id === 1 && (!codeMode ? <Console /> : <Code post={post} />)}
        {post.id === 2 && (!codeMode ? <Dice /> : <Code post={post} />)}
        {post.id === 3 && (!codeMode ? <Counter /> : <Code post={post} />)}
        {post.id === 4 && (!codeMode ? <Recursion /> : <Code post={post} />)}
        {post.id === 5 && (!codeMode ? <PrimaryKey /> : <Code post={post} />)}
        {post.id === 6 && (<MyBook />)}
      </div>
      <div className="source-code-button" onClick={() => toggleCodeMode(post.id)}><span>[[ SOURSE CODE ]]</span></div>
    </div>
  );

}

export default Post;