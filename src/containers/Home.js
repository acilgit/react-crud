import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// import PropTypes from 'prop-types';

import actions from '../redux/actions'

class Home extends React.Component{
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

Home.propTypes = {};

function dispatcher(dispatch){
    return {actions:bindActionCreators(actions, dispatch)}
}

export default connect(state => state.Home, dispatcher)(Home);