/**
 * Created by XY on 2017-05-15.
 */
import React from 'react';
import PropTypes from 'prop-types';

import CrashItem from './CrashItem';

export default function LogList({list, filterText}) {
    let aList = list.filter((log) => {
        return log.logContent.indexOf('105030') > -1 && (filterText != '' ? log.logContent.indexOf(filterText) > -1 : true);
    });
    const emptyMessage = (
        <p>There are no Crash Log yet in  your</p>
    );
    const logList = (
        <div >
            {/*<div className="ui styled accordion">*/}
                {aList.map((log, index) => {
                    log.index = index+1;
                    return (
                        <CrashItem log={log} key={index}/>
                    )
                })}
            {/*</div>*/}
        </div>
    );
    return (
        <div>
            {aList && aList.length > 0 ? logList : emptyMessage}
        </div>
    )
}

LogList.propTypes = {
    list: PropTypes.array.isRequired
};