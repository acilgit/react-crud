/**
 * Created by 18953 on 2017/5/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function Item({item}) {

    console.log('item:', item);
    return (
        <div className="item">
            <div className="content">
                <div className="header">{item.title}</div>
                <div className="description">{item.content}</div>
            </div>
        </div>
    )
}

function CrashItem({log}) {

    let logs = JSON.parse(log.logContent);

    console.log('logs:', logs);

        const aList = (logs instanceof Array) ? (
            <div className="ui relaxed divided list">
                {logs.map((item, index) => (
                    <Item item={item} key={index}/>
                ))}
            </div>
        ) : (<div>{JSON.stringify(logs)}</div>);

    console.log('aList:', aList.title);

    return (
        <div className="ui">
            <table className="ui olive table">
                <thead>
                <tr>
                    <th>版本</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
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