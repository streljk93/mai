import { connect } from 'react-redux';
// import {} from '../actions';

import ViewAnalysis from '../components/ViewAnalysis';

const mapStateToProps = (state) => ({
    entities: state.entities,
    tables: state.tables,
});

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewAnalysis);