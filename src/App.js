import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Login, Game, Ranking, Feedback, Settings } from './pages';
import ComunHeader from './components/ComunHeader';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <ComunHeader />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/ranking" component={Ranking} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
      <Footer />
    </div>
  );
}
