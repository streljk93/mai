import { getId } from '../ownlib/id';

const initialState = [
    {
        id: '_23asdj38ldd',
        name: 'Цeль',
        type: 'target',
    },
    {
        id: '_13asdj38aa',
        name: 'Критерий 1',
        type: 'criterion',
    },
    {
        id: '_wwssdj38aa',
        name: 'Критерий 2',
        type: 'criterion',
    },
    {
        id: '_aishdgakl3',
        name: 'Критерий 3',
        type: 'criterion',
    },
    {
        id: '_i38hnvasdg',
        name: 'Альтернатива 1',
        type: 'alternative',
    },
    {
        id: '_aj38sbakdd',
        name: 'Альтернатива 2',
        type: 'alternative',
    },
    {
        id: '_i383gasdfe',
        name: 'Альтернатива 3',
        type: 'alternative',
    },
];

const entities = (state = initialState, action) => {
    switch (action.type) {

        case 'UPLOAD_ENTITIES':
            return action.payload;

        case 'ADD_ENTITY':
            return [...state, {
                ...action.payload
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