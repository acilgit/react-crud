import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../redux/actions'
import LogList from '../components/LogList';

class CrashLogs extends React.Component {

    componentDidMount() {
        this._onClick(0);
    }

    _onClick = (addPage) => {
        let {page, pageSize} = this.props;
        console.log('page', page + addPage);
        let body = {
            logType: 'CRASH',
            pageSize: pageSize,
            page: page + addPage
        };
        this.props.actions.fetchLogList(body);

    };

    render() {
        let {list, page} = this.props;
        const pageController = (
            <div className="ui right floated pagination menu">
                <a className="icon item" onClick={this._onClick.bind(this, -1)}>
                    <i className="left chevron icon"></i>
                </a>
                <a className="item" onClick={this._onClick.bind(this, 0)}>{page}</a>
                <a className="icon item" onClick={this._onClick.bind(this, 1)}>
                    <i className="right chevron icon"></i>
                </a>
            </div>);
        return (
            <div>
                {pageController}
                <LogList list={list}/>
                {pageController}
            </div>
        )
    }
}

CrashLogs.propTypes = {
    list: PropTypes.array.isRequired
};

function dispatcher(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(state => state.CrashLogs, dispatcher)(CrashLogs);