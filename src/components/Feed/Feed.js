import React, {useEffect, useRef} from 'react';
import { useParams } from "react-router";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import Post from './Post/Post';
import posts from '../../data.json';
import './Feed.scss';

const loadNextPage = (currentItems) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(currentItems.concat(posts));
    }, 100);
  });
}

function Feed() {

  let { id } = useParams();
  const [postsInfinitList, setPostsInfinitList] = React.useState(posts);
  const [loading, setLoading] = React.useState(false);
  const refs = useRef([...new Array(postsInfinitList.length)].map(() => React.createRef()));

  const handleLoadMore = () => {
    setLoading(true);
    loadNextPage(postsInfinitList).then((newItems) => {
      setLoading(false);
      setPostsInfinitList(newItems);
    });
  }

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage: true,
    onLoadMore: handleLoadMore,
    scrollContainer: 'window',
    // threshold: 500
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
      {loading && <div>loading</div>}
    </div>
  );
}

export default Feed;
