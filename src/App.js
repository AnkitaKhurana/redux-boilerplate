import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import Postform from './components/Postform'
import { Provider } from 'react-redux'
import createStore from './store/store'
const store = createStore;

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Posts/>
        <Postform/>
      </div>
      </Provider>
    );
  }
}

export default App;
