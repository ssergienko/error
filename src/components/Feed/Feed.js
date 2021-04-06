import React, {useEffect, useRef, useMemo, useCallback} from 'react';
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

const mapList = (postsInfinitList, refs) => {
  return postsInfinitList.map((post, i) => <Post post={post} key={i} myref={refs.current[i]} />);
}

function Feed() {

  let { id } = useParams();
  const [postsInfinitList, setPostsInfinitList] = React.useState(posts);
  const [loading, setLoading] = React.useState(false);
  const refs = useRef([...new Array(postsInfinitList.length)].map(() => React.createRef()));

  const handleLoadMore = useCallback(() => {
    setLoading(true);
    loadNextPage(postsInfinitList).then((newItems) => {
      setLoading(false);
      setPostsInfinitList(newItems);
    });
  }, [postsInfinitList]);

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage: true,
    onLoadMore: handleLoadMore,
    scrollContainer: 'window',
  });

  const postsInfinitListMemo = useMemo(() => mapList(postsInfinitList, refs), [postsInfinitList, refs]);

  useEffect(() => {
    if(id && refs.current[id-1]) {
      refs.current[id-1].current.scrollIntoView();
    }
  }, [refs, id]);

  return (
    <div className="feed" ref={infiniteRef}>
      {postsInfinitListMemo}
      {loading && <div>loading</div>}
    </div>
  );
}

export default React.memo(Feed);
