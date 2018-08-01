import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import * as actions from './actions/pieceActions';
import { bindActionCreators } from 'redux'

export class App extends Component {

  componentDidMount() {
    this.props.actions.fetchPieces();
  }

  render() {
    return (
      <div className="App">
       {console.log(this.props)}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
  // return {updatePieces: () => dispatch(fetchPieces())}
})

const mapStateToProps = state => ({pieces: state.pieces})

// export default App;
export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
