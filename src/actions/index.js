import { getId } from '../ownlib/id';

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

export function addTable({ source, matrix }) {
    return {
        type: 'ADD_TABLE',
        payload: {
            source,
            matrix
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