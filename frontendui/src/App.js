import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Register from './components/Register'
import Login from './components/Login'
import Landing from './components/Landing'


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Route exact path="/" component={Landing}></Route>
      <div className="container">
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/profilr" component={Profile}></Route>
      </div>
      </div>
    </Router>
  );
}

export default App;
