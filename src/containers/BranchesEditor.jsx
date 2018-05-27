import { connect } from 'react-redux';
import {
    addEntity,
    editEntity,
    deleteEntity,
    addAllEdges,
    deleteEdge,
    deleteAllEdges,
    addTable,
    deleteAllTables
} from '../actions';
import Branches from '../components/Branches';

const mapStateToProps = (state) => {
    return {
        entities: state.entities,
        edges: state.edges,
        tables: state.tables,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddEntity: (name, type) => {
            const result = dispatch(addEntity({ name, type }));
            return result.payload;
        },
        onEditEntity: (id, name) => {
            dispatch(editEntity({ id, name }));
        },
        onDeleteEntity: (id) => {
            dispatch(deleteEntity(id));
        },
        onAddAllEdges: (edges) => {
            dispatch(addAllEdges(edges));
        },
        onDeleteEdge: (id) => {
            dispatch(deleteEdge(id));
        },
        onDeleteAllEdges: () => {
            dispatch(deleteAllEdges());
        },
        onAddTable: (source, matrix) => {
            const result = dispatch(addTable({ source, matrix }));
            return result;
        },
        onDeleteAllTables: () => {
            dispatch(deleteAllTables());
        },
    };
};

const BranchesEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(Branches);

export default BranchesEditor;