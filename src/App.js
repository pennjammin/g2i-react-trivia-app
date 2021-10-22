import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './index.css';

import QuizPage from './components/pages/QuizPage.js';
import AnswerPage from './components/pages/AnswerPage.js';
import HomePage from './components/pages/HomePage.js';

export default function App() {
  return(
  <Router>
    <Switch>
      <Route path="/quiz">
        <QuizPage />
      </Route>
      <Route path="/answer">
        <AnswerPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
  );
}
