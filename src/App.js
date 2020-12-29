import logo from './logo.svg';
import './App.scss';
import posts from './data.json';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {posts.map((post) => 
          <Post post={post} key={post.id} />
        )}
      </header>
    </div>
  );
}

export default App;
