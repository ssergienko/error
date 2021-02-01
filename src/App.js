import './App.scss';
import posts from './data.json';
import Post from './components/Post/Post';
import { NotificationContainer } from 'react-notifications';

function App() {
  return (
    <div className="app">
      <div className="feed">
        {posts.map((post) => 
          <Post post={post} key={post.id} />
        )}
      </div>
      <NotificationContainer/>
    </div>
  );
}

export default App;
