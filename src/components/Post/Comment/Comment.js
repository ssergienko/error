import './Comment.scss';
import React from "react";

function Comment() {

  const [commentText, setCommentText] = React.useState('');

  const onClick = () => {
    setCommentText('');
  }

  return (
    <div className="comment">
      <div className="menu-item">
        <div className="avatar">V</div>
      </div>
      <div className="menu-item form-field">
        <input type="text" placeholder="What do you think?" value={commentText} onChange={event => setCommentText(event.target.value)} />
      </div>
      <div className="menu-item">
        <div className="button" onClick={() => onClick()}>Say</div>
      </div>
    </div>
  );

}

export default Comment;