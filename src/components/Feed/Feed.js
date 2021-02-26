import React, {useEffect, useRef} from 'react';
import { useParams } from "react-router";
import Post from '../Post/Post';
import './Feed.scss';

function Feed({posts}) {

  let { id } = useParams();
  const refs = useRef([...new Array(posts.length)].map(() => React.createRef()));

  useEffect(() => {
    if(id && refs.current[id-1]) {
      refs.current[id-1].current.scrollIntoView();
    }
  }, [refs]);

  return (
    <div className="feed">
      {posts.map((post, i) => 
        <Post post={post} key={post.id} myref={refs.current[i]} />
      )}
    </div>
  );
}

export default Feed;
