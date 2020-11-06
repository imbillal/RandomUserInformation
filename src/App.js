import React from 'react';
import logo from './logo.svg';
import { Counter } from './components/counter/Counter';
import './App.css';
import Dashboard from './pages/Dashboard';
import {BrowserRouter, Route} from 'react-router-dom'
import AuthorProfile from './pages/AuthorProfile';
import Navigation from './components/Navigation/Navigation';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route><Navigation /></Route>
          <Route path='/' component={Dashboard} exact/>
          <Route path='/author/:authorId' component={AuthorProfile} exact/>
          <Route path='/author/:authorId/posts/:postId' component={SinglePost} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
