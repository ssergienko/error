import './Post.scss';

function Post({post}) {

  return (
    <div className="post">
      <div className="author">
        <div className="avatar"><span>?</span></div>
        <div className="name">{post.author.firstname} {post.author.surname}</div>
      </div>
      <div className="text">{post.text}</div>
    </div>
  );

}

export default Post;