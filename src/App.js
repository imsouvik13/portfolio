import React, { Component } from 'react';
import './App.scss';

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent'
class App extends Component {
  render() {


    


    return (
      <div className="App">
        <Navbar/>
        <div className="main-body">
        <Sidebar/>
        <MainContent/>
        </div>
      </div>
    );
  }
}

export default App;
