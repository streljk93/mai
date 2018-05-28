import { getId } from '../ownlib/id';

export function uploadEntities(data) {
    return {
        type: 'UPLOAD_ENTITIES',
        payload: data,
    };
}

export function addEntity({ name, type }) {
    return {
        type: 'ADD_ENTITY',
        payload: {
            id: getId(),
            name,
            type,
        },
    };
}

export function editEntity({ id, name }) {
    return {
        type: 'EDIT_ENTITY',
        payload: {
            id,
            name,
        },
    };
}

export function deleteEntity(id) {
    return {
        type: 'DELETE_ENTITY',
        payload: {
            id,
        },
    };
}

export function uploadEdges(data) {
    return {
        type: 'UPLOAD_EDGES',
        payload: data,
    };
}

export function addAllEdges(edges) {
    return {
        type: 'ADD_ALL_EDGES',
        payload: edges,
    };
}

export function deleteEdge(id) {
    return {
        type: 'DELETE_EDGE',
        payload: {
            id
        },
    };
}

export function deleteAllEdges(source) {
    return {
        type: 'DELETE_ALL_EDGES',
    };
}

export function uploadTables(data) {
    return {
        type: 'UPLOAD_TABLES',
        payload: data,
    };
}

export function addTable({ source, matrix }) {
    return {
        type: 'ADD_TABLE',
        payload: {
            source,
            matrix,
            gm: null,
            sgm: null,
            nvp: null,
            lmax: null,
            ci: null,
            cr: null,
        },
    };
}

export function deleteTable(source) {
    return {
        type: 'DELETE_TABLE',
        payload: {
            source,
        },
    };
}

export function deleteAllTables() {
    return {
        type: 'DELETE_ALL_TABLES',
    };
}

export function editMatrix({ source, row, col, value }) {
    return {
        type: 'EDIT_MATRIX',
        payload: {
            source,
            row,
            col,
            value,
        }
    };
}

export function calculationGM(source) {
    return {
        type: 'CALCULATION_GM',
        payload: {
            source,
        },
    };
}

export function calculationSGM(source) {
    return {
        type: 'CALCULATION_SGM',
        payload: {
            source,
        },
    };
}

export function calculationNVP(source) {
    return {
        type: 'CALCULATION_NVP',
        payload: {
            source,
        },
    };
}

export function calculationLMAX(source) {
    return {
        type: 'CALCULATION_LMAX',
        payload: {
            source,
        },
    };
}

export function calculationCI(source) {
    return {
        type: 'CALCULATION_CI',
        payload: {
            source,
        },
    };
}

export function calculationCR(source) {
    return {
        type: 'CALCULATION_CR',
        payload: {
            source,
        },
    };
}