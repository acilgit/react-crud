import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../redux/actions'
import LogList from '../components/LogList';

class CrashLogs extends React.Component{

    componentDidMount() {
        let body = {
            logType:'CRASH',
            pageSize: 30,
            page:1
        };
        this.props.actions.fetchLogList(body);
    }
    render() {
        let {list, actions} = this.props;

        return (
            <div>
               <h1>
                   Log List
               </h1>
                <LogList list={list} fetchLogList={actions.fetchLogList}/>
            </div>
        )
    }
}

CrashLogs.propTypes = {
    list: PropTypes.array.isRequired
};

function dispatcher(dispatch){
    return {actions:bindActionCreators(actions, dispatch)}
}

export default connect(state => state.CrashLogs, dispatcher)(CrashLogs);