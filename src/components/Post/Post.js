import './Post.scss';
import Console from '../Console/Console';
import Counter from '../Counter/Counter';

function Post({post}) {

  return (
    <div className="post">
      <div className="author">
        <div className="avatar"><span>?</span></div>
        <div className="name">{post.author.firstname} {post.author.surname}</div>
      </div>
      <div className="text">{post.text}</div>
      <div className="widget" id="widget">
        {post.id === 1 && <Console />}
        {post.id === 3 && <Counter />}
      </div>
      <div className="source-code-button"><span>[[ SOURSE CODE ]]</span></div>
    </div>
  );

}

export default Post;