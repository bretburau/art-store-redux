import fetch from 'isomorphic-fetch'

export function fetchPieces() {
    return(dispatch) => {
        dispatch({type: 'LOADING_PIECES'});
        return fetch('http://localhost:3001/pieces')
            .then(response => response.json())
            .then(pieces => dispatch({type: 'FETCH_PIECES', payload: pieces}))
    }
}