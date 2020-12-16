import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Edit from './pages/Edit'
import Show from './pages/Show'
import New from './pages/New'

import Nav from './components/Nav';

import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      bounties: []
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3001/bounties')
    const json = await response.json()
    this.setState({ bounties: json.bounties})
  }


  render() {
    return (
      <div className="App">
        <h1>App!</h1>

        <Nav />

        <Route path='/' exact>
          <Home bounties={this.state.bounties} /> 
        </Route>
        
        <Route path='/show/:id'>
          <Show />
        </Route>

        <Route path='/new'>
          <New />
        </Route>

        <Route path='/edit/:id'>
          <Edit />
        </Route>

      </div>
    );
  }
}

export default App;
