import React from 'react';
import ProfileList from "./components/ProfileList";
import NaviBar from "./components/NaviBar";
import Home from "./components/Home";
import HeaderBar from "./components/HeaderBar";
import ProfileCard from "./components/ProfileCard";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      {/* Header Bar */}
      <HeaderBar />
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profiles" exact component={ProfileList} />
        <Route path="/profiles/:id" component={ProfileCard} />
      </Switch>

      {/* Navi Bar */}
      
    </div>
    </Router>
  )
}

export default App
