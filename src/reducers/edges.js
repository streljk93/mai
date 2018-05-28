import { getId } from '../ownlib/id';

const edges = (state = [], action) => {
    switch (action.type) {

        case 'UPLOAD_EDGES':
            return action.payload;

        case 'ADD_ALL_EDGES':
            return action.payload.map(edge => {
                return {
                    source: edge.source,
                    target: edge.target
                };
            });

        case 'DELETE_EDGE':
            return state.filter(e => {
                if (e.id !== action.payload.id) return true;
            });

        case 'DELETE_ALL_EDGES':
            return [];

        default:
            return state;
    }
};

export default edges;