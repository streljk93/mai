import { connect } from 'react-redux';
import {
    addEntity,
    editEntity,
    deleteEntity,
    addEdge,
    deleteEdge,
    deleteGroupEdge
} from '../actions';
import Branches from '../components/Branches';

const mapStateToProps = (state) => {
    return {
        entities: state.entities,
        edges: state.edges,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddEntity: (name, type) => {
            dispatch(addEntity({ name, type }));
        },
        onEditEntity: (id, name) => {
            dispatch(editEntity({ id, name }));
        },
        onDeleteEntity: (id) => {
            dispatch(deleteEntity(id));
        },
        onAddEdge: (source, target) => {
            dispatch(addEdge({ source, target }));
        },
        onDeleteEdge: (id) => {
            dispatch(deleteEdge(id));
        },
        onDeleteGroupEdge: (source) => {
            dispatch(deleteGroupEdge(source));
        },
    };
};

const BranchesEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(Branches);

export default BranchesEditor;