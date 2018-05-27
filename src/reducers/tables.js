import { getId } from '../ownlib/id';

const initialState = [
    {
        source: '_23asdj38ldd',
        matrix: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ],
    },
    {
        source: '_13asdj38aa',
        matrix: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ],
    },
    {
        source: '_wwssdj38aa',
        matrix: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ],
    },
    {
        source: '_aishdgakl3',
        matrix: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ],
    },
];

const tables = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TABLE':
            return [...state, { ...action.payload }];

        case 'DELETE_TABLE':
            return state.filter(table => table.source !== action.payload.source);

        case 'DELETE_ALL_TABLES':
            return [];

        case 'EDIT_MATRIX':
            return state.map(table => {
                if (table.source === action.payload.source) {
                    table.matrix[action.payload.row][action.payload.col] = action.payload.value;
                    table.matrix[action.payload.col][action.payload.row] = 1/action.payload.value;
                }

                return table;
            });

        default:
            return state;

    }
};

export default tables;