import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage';

import Header from './components/Header/Header';
import SignInPage from './pages/SignInPage/SignInPage';
import DemoPage from './pages/DemoPage/DemoPage';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      sessionUser: null
    }
  }

  render() {
    return (
      <div className="App">
        <Header sessionUser={this.state.sessionUser}/>
        <Route component={HomePage} path='/' exact/>
        <Route component={SignInPage} path='/signin' exact/>
        <Route component={DemoPage} path='/demo' exact />
      </div>
    );
  }
}

export default App;
