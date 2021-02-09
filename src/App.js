import React, {useEffect} from 'react';
import './App.scss';
import posts from './data.json';
import Post from './components/Post/Post';
import { NotificationContainer } from 'react-notifications';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const redBackgroundSecondsValue = 12;
  const [seconds, setSeconds] = React.useState(null);

  const showRedCanvas = () => {
    return seconds === redBackgroundSecondsValue || 
           (seconds > redBackgroundSecondsValue && seconds < redBackgroundSecondsValue + 3);
  }

  useEffect(() => {
    let timer = setInterval(() => {
      const date = new Date();
      setSeconds(date.getSeconds());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  return (
    <>
      {!showRedCanvas() && <div className="app">
        <Router>
          <Switch>
            <Route path="/post/:id">
              <div className="feed">
                <Post />
              </div>
            </Route>
            <Route path="/">
              <div className="feed">
                {posts.map((post) => 
                  <Post data={post} key={post.id} />
                )}
              </div>
            </Route>
          </Switch>
        </Router>
        <NotificationContainer/>
      </div>}
      {showRedCanvas() && <div className="red-canvas"></div>}
    </>
  );
}

export default App;
