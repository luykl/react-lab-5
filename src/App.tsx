import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Coke from './components/Coke'
// import Pepsi from './components/Pepsi'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListStoriesRoute from './components/ListStoriesRoute';
import ViewStoryRoute from './components/ViewStoryRoute';
import CreateStoryRoute from './components/CreateStoryRoute';
import { StoryContextProvider } from './context/madlib-context';

function App() {
  return (
    <StoryContextProvider>
    
    <div className="App">
      <Router>
        <h1>GC Mad Libs</h1>
        <nav>
          <Link to="/stories">View Saved Stories</Link> {" "}
          <Link to="/create-story">Create New Story</Link>
        </nav>
      
        <Switch>
            <Route path="/stories/:num">
              <ViewStoryRoute />
            </Route>
            <Route path="/stories">
              <ListStoriesRoute />
            </Route>
            <Route path="/create-story">
              <CreateStoryRoute />
            </Route>
        </Switch>
      </Router>
      
      
    </div>
    </StoryContextProvider>
    
  );
}

export default App;
