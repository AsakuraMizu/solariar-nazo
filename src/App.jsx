import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import 'fomantic-ui-css/semantic.css';
import { Container } from 'semantic-ui-react';
import Header from './components/header';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import LevelPage from './pages/level';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Container style={{ marginTop: '7em' }}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route path='/:level' component={LevelPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
