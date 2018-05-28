import config from '../config';
import { getId } from '../ownlib/id';

const initialState = [
    {
        source: '_23asdj38ldd',
        matrix: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ],
        gm: null,
        sgm: null,
        nvp: null,
        lmax: null,
        ci: null,
        cr: null,
    },
    {
        source: '_13asdj38aa',
        matrix: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ],
        gm: null,
        sgm: null,
        nvp: null,
        lmax: null,
        ci: null,
        cr: null,
    },
    {
        source: '_wwssdj38aa',
        matrix: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ],
        gm: null,
        sgm: null,
        nvp: null,
        lmax: null,
        ci: null,
        cr: null,
    },
    {
        source: '_aishdgakl3',
        matrix: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ],
        gm: null,
        sgm: null,
        nvp: null,
        lmax: null,
        ci: null,
        cr: null,
    },
];

const tables = (state = initialState, action) => {
    switch (action.type) {

        case 'UPLOAD_TABLES':
            return action.payload;

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

        case 'CALCULATION_GM':
            const gm = [];
            let pr = 1;

            return state.map(table => {
                if (table.source === action.payload.source) {
                    table.matrix.map(row => {

                        const length = row.length;
                        pr = row.reduce((acc, val) => acc * val);
                        gm.push(Math.pow(pr, 1/length));
                        table.gm = gm;
                    });
                }
                return table;
            });

        case 'CALCULATION_SGM':
            let sgm = null;
            return state.map(table => {
                if (table.source === action.payload.source) {
                    if (table.gm !== null) {
                        sgm = [...table.gm];
                        table.sgm = sgm.reduce((acc, val) => acc + val);
                        // table.sgm = sgm;
                    }
                }

                return table;
            });

        case 'CALCULATION_NVP':
            const nvp = [];
            return state.map(table => {
                if (table.source === action.payload.source) {
                    if (
                        table.gm !== null &&
                        table.sgm !== null
                    ) {
                        table.gm.map(value => {
                            nvp.push(value/table.sgm);
                        });
                        table.nvp = nvp;
                    }
                }

                return table;
            });

        case 'CALCULATION_LMAX':
            const intermediate = [];
            let sumColl;
            let lmax;

            return state.map(table => {
                if (table.source === action.payload.source) {
                    if (
                        table.gm !== null &&
                        table.sgm !== null &&
                        table.nvp !== null
                    ) {

                        // get sumColl
                        const length = table.matrix.length;
                        sumColl = new Array(length).fill(0);
                        table.matrix.map(row => {
                            row.map((cell, i) => {
                                sumColl[i] += cell;
                            })
                        });

                        // get intermediate
                        for (let i = 0; i < length; i++) {
                            intermediate.push(table.nvp[i] * sumColl[i]);
                        }
                        lmax = intermediate.reduce((acc, val) => acc + val);

                        table.lmax = lmax;
                    }
                }
                return table;
            });

        case 'CALCULATION_CI':
            let ci;
            return state.map(table => {
                if (table.source === action.payload.source) {
                    if (
                        table.gm !== null &&
                        table.sgm !== null &&
                        table.nvp !== null &&
                        table.lmax !== null
                    ) {

                        const length = table.matrix.length;
                        ci = (table.lmax - length) / (length - 1);
                        table.ci = ci;
                    }
                }
                return table;
            });

        case 'CALCULATION_CR':
            let cr;
            return state.map(table => {
                if (table.source === action.payload.source) {
                    if (
                        table.gm !== null &&
                        table.sgm !== null &&
                        table.nvp !== null &&
                        table.lmax !== null &&
                        table.ci !== null
                    ) {

                        const length = table.matrix.length;
                        cr = table.ci / config.analysis.rc[length];
                        table.cr = cr;
                    }
                }
                return table;
            });

        default:
            return state;

    }
};

export default tables;