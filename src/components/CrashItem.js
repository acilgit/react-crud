/**
 * Created by 18953 on 2017/5/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function Item({item}) {

    return (
        <div className="item">
            <div className="content">
                <div className="header">{item.title} --> {item.dateTime}</div>
                <div className="description">{item.content}</div>
            </div>
        </div>
    )
}

function CrashItem({log}) {

    let logs = JSON.parse(log.logContent);

    console.log('logs:', logs);

    let aList, crashText, newLogs;
    if (logs instanceof Array) {
        newLogs = logs.filter((log, index) => {
            if (log.title === '[Crash]') {
                crashText = log.content;
            }
            return log.title !== '[Crash]'
        });
        aList = (
            <div className="ui relaxed divided list">
                {newLogs.map((item, index) => (
                    <Item item={item} key={index}/>
                ))}
            </div>
        )
    } else {
        crashText = JSON.stringify(logs);
        aList = (<div></div>)
    }

    return (
        <div className="ui">
            <table className="ui inverted table">
                <thead>
                <tr>
                    <th>崩溃操作 </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{crashText}</td>
                </tr>
                </tbody>
            </table>
            { aList}
        </div>
    )
}

CrashItem.propTypes = {
    log: PropTypes.object.isRequired
};

export default CrashItem