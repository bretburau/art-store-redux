import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {

  }
  
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {

}

function mapStateToProps(state) {

}

export default App;
export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
