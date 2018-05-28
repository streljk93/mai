import { connect } from 'react-redux';
import {
    editMatrix,
    calculationGM,
    calculationSGM,
    calculationNVP,
    calculationLMAX,
    calculationCI,
    calculationCR
} from '../actions';

import TablesEditor from '../components/TablesEditor';

const mapStateToProps = (state) => ({
    entities: state.entities,
    edges: state.edges,
    tables: state.tables
});

const mapDispatchToProps = (dispatch) => ({
    onEditMatrix: (source, row, col, value) => {
        dispatch(editMatrix({ source, row, col, value }));
    },
    onCalculationGM: (source) => {
        dispatch(calculationGM(source));
    },
    onCalculationSGM: (source) => {
        dispatch(calculationSGM(source));
    },
    onCalculationNVP: (source) => {
        dispatch(calculationNVP(source));
    },
    onCalculationLMAX: (source) => {
        dispatch(calculationLMAX(source));
    },
    onCalculationCI: (source) => {
        dispatch(calculationCI(source));
    },
    onCalculationCR: (source) => {
        dispatch(calculationCR(source));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TablesEditor);