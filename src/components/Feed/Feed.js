import React, {useEffect, useRef} from 'react';
import { useParams } from "react-router";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import Post from '../Post/Post';
import posts from '../../data.json';
import './Feed.scss';

function Feed() {

  let { id } = useParams();
  const [postsInfinitList, setPostsInfinitList] = React.useState(posts);
  const refs = useRef([...new Array(postsInfinitList.length)].map(() => React.createRef()));

  const handleLoadMore = () => {
    setPostsInfinitList(postsInfinitList.concat(postsInfinitList));
  }

  const infiniteRef = useInfiniteScroll({
    hasNextPage: true,
    onLoadMore: handleLoadMore
  });

  useEffect(() => {
    if(id && refs.current[id-1]) {
      refs.current[id-1].current.scrollIntoView();
    }
  }, [refs, id]);

  return (
    <div className="feed" ref={infiniteRef}>
      {postsInfinitList.map((post, i) => 
        <Post post={post} key={i} myref={refs.current[i]} />
      )}
    </div>
  );
}

export default Feed;
