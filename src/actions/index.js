export function addEntity({ name, type }) {
    return {
        type: 'ADD_ENTITY',
        payload: {
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

export function addEdge({ source, target }) {
    return {
        type: 'ADD_EDGE',
        payload: {
            source,
            target,
        },
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

export function deleteGroupEdge(source) {
    return {
        type: 'DELETE_EDGE',
        payload: {
            source
        },
    };
}