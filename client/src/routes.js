import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConnectedApp } from './App';
import UploadForm from './components/upload_form';

export default () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={ConnectedApp} />
                <Route exact path='/upload' component={UploadForm} />
            </Switch>
        </Router>
    )
}
