export default function piecesReducer(state = {loading: false, pieces: []}, action) {
    switch (action.type) {
        case 'LOADING_PIECES':
            return Object.assign({}, state, {loading: true})
        case 'FETCH_PIECES':
            return {loading: false, pieces: action.payload}
        case 'ADD_PIECE':
            return Object.assign({}, state, {loading: false})
        case 'ADDING_PIECE':
            return Object.assign({}, state, {loading: true})
        default:
            return state
    }
}