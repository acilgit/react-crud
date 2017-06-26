/**
 * Created by XY on 2017-05-15.
 */
import React from 'react';
import PropTypes from 'prop-types';

import CrashItem from './CrashItem';

export default function LogList({list}) {
    const emptyMessage = (
        <p>There are no Crash Log yet in your  </p>
    );
    const logList = (
        <div >
            {list.map((log, index) => (
            <CrashItem log={log} key={log.id}/>
            ))}
        </div>
    );
    return (
        <div>
            {list && list.length > 0 ? logList : emptyMessage}
        </div>
    )
}

LogList.propTypes = {
    list: PropTypes.array.isRequired
};