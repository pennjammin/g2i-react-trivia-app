import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './index.css';

import QuizPage from './components/pages/Quiz/QuizPage.js';
import AnswerPage from './components/pages/Answer/AnswerPage.js';
import HomePage from './components/pages/Home/HomePage.js';

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
