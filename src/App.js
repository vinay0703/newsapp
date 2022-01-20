import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  pageSize = 6;
  loadingBarHeight = 3;
  constructor() {
    super();
    this.state = {
      progress: 0,
      apiKey: process.env.REACT_APP_NEWS_API_KEY2,
    };
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <Router>
          <LoadingBar
            height={this.loadingBarHeight}
            color="#f11946"
            progress={this.state.progress}
          />
          <Navbar title="NewsApp" aboutText="About NewsApp" />
          <div className="container my-3">
            <Switch>
              <Route exact path="/">
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              </Route>
              <Route exact path="/Business">
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              </Route>
              <Route exact path="/Entertainment">
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              </Route>
              <Route exact path="/Health">
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              </Route>
              <Route exact path="/Science">
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              </Route>
              <Route exact path="/Sports">
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              </Route>
              <Route exact path="/Technology">
                <News
                  apiKey={this.state.apiKey}
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
