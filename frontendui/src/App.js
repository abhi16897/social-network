import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Register from './components/Register'
import Login from './components/Login'
import Landing from './components/Landing'
import UploadMedia from './components/UploadMedia';


function App() {
  return (
    <div>
    <Router>
      <div className="App">
      <Navbar/>
      <Route exact path="/" component={Landing}></Route>
      <div className="container">
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/upload" component={UploadMedia}></Route>
      </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
