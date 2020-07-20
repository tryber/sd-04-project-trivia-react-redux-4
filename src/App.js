import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Login, Game, Ranking, Feedback, Settings } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/ranking" component={Ranking} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </Content>
      <Footer />
    </div>
  );
}
