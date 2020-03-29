import * as React from 'react';
import { Component } from 'react';
import './App.css';
import { JobsAppBar } from './components/Application-Header/JobsAppBar';

class App extends Component<any, any> {
  constructor(props : any) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <JobsAppBar user={{name: "Meshushe", userInitials: "Shmuel"}}></JobsAppBar>
      </div>
    );
  }
}
export default App;
