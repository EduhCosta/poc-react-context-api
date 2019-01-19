import React, { Component } from 'react'

// Components
import { ContainerList } from './components'
// Service
import { getUsers } from './core-service'
// Context
import CoreContext from './Context';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.getUsers()
  }

  getUsers = async () => {
    const users = await getUsers().then(res => res)
    this.setState({ users })
  }

  render() {
    return (
      <CoreContext.Provider value={{ ...this.state }}>
        <ContainerList />
      </CoreContext.Provider>
    );
  }
}

export default App;
