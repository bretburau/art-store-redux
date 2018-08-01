import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import * as actions from './actions/pieceActions';
import { bindActionCreators } from 'redux'

export class App extends Component {

  componentDidMount() {
    debugger;
  }

  render() {
    return (
      <div className="App">
       hi
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
  // return {updatePieces: () => dispatch(fetchPieces())}
})

const mapStateToProps = state => ({
  // pieces: this.state.pieces
})

// export default App;
export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
