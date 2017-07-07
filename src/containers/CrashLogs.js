import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import faker from 'faker';

import ui, {Checkbox, Accordion, AccordionTitle, AccordionContent} from 'semantic-ui-react';


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
    _checkOnChange = (e) => {
        this.props.actions.setProps(types.crashLogs, {containFilterText: !this.props.containFilterText})
    };

    render() {
        let {list, page, filterText, containFilterText} = this.props;
        let aList = list.filter((log) => {
            let filter = (filterText != '' ? (containFilterText ? log.logContent.indexOf(filterText) > -1 : log.logContent.indexOf(filterText) == -1 ): true);
            return log.logContent.indexOf('105030') > -1 && filter;
        });
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
                <Accordion color="red" defaultActiveIndex={1} inverted={false}>
                    <AccordionTitle><i className="dropdown icon"></i>{faker.lorem.sentence()}</AccordionTitle>
                    <AccordionContent >
                        <p>{faker.lorem.paragraph()}</p>
                    </AccordionContent>
                    <AccordionTitle ><i className="dropdown icon"></i>{faker.lorem.sentence()}</AccordionTitle>
                    <AccordionContent>
                        <p>{faker.address.country()}</p>
                    </AccordionContent>
                    <AccordionTitle ><i className="dropdown icon"></i>{faker.lorem.sentence()}</AccordionTitle>
                    <AccordionContent>
                        <p>{faker.name.jobTitle()}</p>
                    </AccordionContent>
                </Accordion>

                <div>
                    <div name="inputFilter" className="ui input">
                        <input type="text" onChange={this._filterOnChange}/>
                    </div>
                    <Checkbox toggle={true} checked={containFilterText} onChange={this._checkOnChange} label={containFilterText ? '包含字符':'排 除 字 符'}>
                       {/* <input type="checkbox" checked={!containFilterText} onChange={this._checkOnChange}/>
                        <lable>包含字符</lable>*/}
                    </Checkbox>
                </div>
                {pageController}
                <LogList list={aList}/>
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