import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./components/News";
import Footer from "./components/Footer";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const loadingBarHeight = 3;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <LoadingBar
          height={loadingBarHeight}
          color="#f11946"
          progress={progress}
        />
        <Navbar title="NewsApp" aboutText="About NewsApp" />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/Business">
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/Entertainment">
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/Health">
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/Science">
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/Sports">
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/Technology">
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
