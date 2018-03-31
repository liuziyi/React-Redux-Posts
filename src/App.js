import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './store';

import Main from './components/Main';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar/>
          <div className="container">
            <Main/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
