import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';


import * as types from '../redux/actions/actionTyps';
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

    _filterOnChange = (e) => {
        this.props.actions.setProps(types.crashLogs, {filterText: e.target.value})
    };

    render() {
        let {list, page, filterText} = this.props;
        const pageController = (
            <div className="ui right floated pagination menu">
                <a className="icon item" onClick={this._onClick.bind(this, -1)}>
                    <i className="left chevron icon"></i>
                </a>
                <a className="item" onClick={this._onClick.bind(this, 0)}>{page}</a>
                <a className="icon item" onClick={this._onClick.bind(this, 1)}>
                    <i className="right chevron icon"> </i>
                </a>
            </div>);
        return (
            <div>
                <div className="ui accordion">
                    <div className="active title"><i className="dropdown icon"></i> What is a dog?</div>
                    <div className="active content">
                        <p>A dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be
                            found as a welcome guest in many households across the world.</p>
                    </div>
                    <div className="title"><i className="dropdown icon"></i> What kinds of dogs are there?</div>
                    <div className="content">
                        <p>There are many breeds o f dogs. r eturn Each breed var ies in size an d temperament. Owners
                            often
                            select a breed of dog that they find to be compatible with their own lifestyle and
                            des  ires from a companion.</p>
                    </div>
                    <div className="title"><i className="dropdown icon"></i> How do you acquire a dog?</div>
                    <div className="content">
                        <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private
                            owners, or  shelters.</p>
                        <p>A pet shop may be  the most convenient way to buy a dog.Buying a dog from a private owner
                            allows you to assess the pedigree and upbringing of your dog before choosing to take it
                            home. Lastly, finding your dog from a   shelter helps give a good home to a dog who may
                            not find one so readily.</p>
                    </div>
                </div>

                <div>
                    <div name="inputFilter" className="ui input">
                        <input type="text" onChange={this._filterOnChange}/>
                    </div>
                </div>
                {pageController}
                <LogList list={list} filterText={filterText}/>
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