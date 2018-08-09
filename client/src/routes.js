import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConnectedApp } from './App';
import UploadForm from './components/upload_form';
import PieceShow from './components/PieceShow';

export default () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={ConnectedApp} />
                <Route exact path='/upload' component={UploadForm} />
                <Route exact path='/pieces/:pieceId' component={PieceShow} />
            </Switch>
        </Router>
    )
}
