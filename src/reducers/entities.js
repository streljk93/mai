import { getId } from '../ownlib/id';

const initialState = [
    {
        id: getId(),
        name: '',
        type: 'target',
    },
    {
        id: getId(),
        name: '',
        type: 'criterion',
    },
    {
        id: getId(),
        name: '',
        type: 'alternative',
    },
];

const entities = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_ENTITY':
            return [...state, {
                id: getId(),
                name: action.payload.name,
                type: action.payload.type,
            }];

        case 'EDIT_ENTITY':
            return state.map(cr => {
                if (cr.id === action.payload.id)
                    cr.name = action.payload.name

                return cr;
            });

        case 'DELETE_ENTITY':
            return state.filter(cr => {
                if (cr.id !== action.payload.id) return true;
            });

        default:
            return state;

    }
};

export default entities;