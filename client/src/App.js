import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import * as actions from './actions/pieceActions';
import { bindActionCreators } from 'redux'
import PieceList from './components/Piecelist';

export class App extends Component {

  componentDidMount() {
    console.log('pieces')
    this.props.actions.fetchPieces();
  }

  render() {
    return (
      <div className="App">
        <PieceList pieces={this.props.pieces} />
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
