import { getId } from '../ownlib/id';

const edges = (state = [], action) => {
    switch (action.type) {

        case 'ADD_EDGE':
            return [...state, {
                id: getId(),
                source: action.payload.source,
                target: action.payload.target,
            }];

        case 'DELETE_EDGE':
            return state.filter(e => {
                if (e.id !== action.payload.id) return true;
            });

        case 'DELETE_GROUP_EDGE':
            return state.filter(e => {
                if (e.source !== action.payload.source) return true
            });

        default:
            return state;
    }
};

export default edges;