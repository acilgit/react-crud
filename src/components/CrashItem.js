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

export default class CrashItem extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            showList: false
        };
    }

    render() {

        let {log} = this.props;

        let logs = JSON.parse(log.logContent);

        console.log('logs:', logs);

        let aList, newLogs, info, dateTime = {crashText: '  '};
        if (logs instanceof Array) {
            newLogs = logs.filter((log, index) => {
                if (log.title === '[Crash]') {
                    info = JSON.parse(log.content);
                    dateTime = log.dateTime;
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
            info.errorMsg = JSON.stringify(logs);
            aList = (<div></div>)
        }

        return (
            <div>
                {/*<div className="title">*/}
                    <table className="ui inverted table">
                        <thead>
                        <tr>
                            <th>序号：{log.index} </th>
                            <th>时间：{dateTime} </th>
                            <th>用户：{info.user} </th>
                        </tr>
                        <tr>
                            <th>机型：{info.manufacturer} - {info.model}</th>
                            <th>SDK：{info.sdk} ({info.release})</th>
                            <th>版本：{info.versionName}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td colSpan="3">{info.errorMsg}</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr onClick={() => {
                            this.setState({showList: !this.state.showList})
                        }}>
                            <th className="center aligned" colSpan="3">
                                <a >{this.state.showList ? '隐藏' : '查看'}Log日志详 情</a>
                            </th>
                        </tr>
                        </tfoot>
                    </table>
               {/* </div>*/}
                {/*<div className="content">*/}
                    {this.state.showList ? aList : null}
               {/* </div>*/}
            </div>
        )
    }
}


/* return (
 crashText.indexOf('onKeyDown') >= 0 || crashText.indexOf('XML file line #31') >= 0 ?
 (<table className="ui inverted green table">
 <thead>
 <tr>
 <th>崩溃操作 onKeyDown XML file line #31</th>
 </tr>
 </thead>
 </table>)
 :(<div className="ui">
 <table className="ui inverted table">
 <thead>
 <tr>
 <th>崩溃操作</th>
 <th>{key}</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>{crashText}</td>
 </tr>
 </tbody>
 </table>
 { aList}
 </div>)
 )*/

CrashItem.propTypes = {
    log: PropTypes.object.isRequired
};
