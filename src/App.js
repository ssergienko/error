import React, {useEffect} from 'react';
import './App.scss';
import Feed from './components/Feed/Feed';
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
           (seconds > redBackgroundSecondsValue && seconds < redBackgroundSecondsValue + 1);
  }

  const onBackClicked = () => {
    window.location.href = "https://www.mariakokunova.com/error";
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
        <div className="back-button" onClick={onBackClicked}>&#8592;</div>
          <Router>
            <Switch>
              <Route path="/post/:id">
                <Feed />
              </Route>
              <Route path="/">
                <Feed />
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
