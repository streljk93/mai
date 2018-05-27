import { connect } from 'react-redux';
import { editMatrix } from '../actions';

import TablesEditor from '../components/TablesEditor';

const mapStateToProps = (state) => ({
    entities: state.entities,
    edges: state.edges,
    tables: state.tables
});

const mapDispatchToProps = (dispatch) => ({
    onEditMatrix: (source, row, col, value) => {
        dispatch(editMatrix({ source, row, col, value }));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TablesEditor);