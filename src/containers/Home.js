import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// import PropTypes from 'prop-types';

import actions from '../redux/actions';


class Home extends React.Component {
    render() {
        let {title1, title2, text1, text2} = this.props;
        return (
            <div>

                 Home    : {JSON.stringify(this.jumpBrowserType())}
            </div>
        );
    }

    // 判断当前访问者的客户端设备类型、操作系统及浏览器类型
    jumpBrowserType = () => {
        // let browser = {
        //     versions: function () {
                var u = navigator.userAgent, app = navigator.appVersion;
                return { // 客户端浏览器版本信息
                    trident: u.indexOf('Trident') > -1, // IE内核
                    webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
                    Android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
                    iPhone: u.indexOf('iPhone') > -1,
                        mac: u.indexOf('Mac') > -1 // 是否为iPhone或者QQHD浏览器
                };
            // }
        // }
        // return browser.versions;
// 是否为移动终端
       /* if (!browser.versions.mobile) {
// 是否为IE内核
            if (browser.versions.trident) {
                return 4;
            } else if (browser.versions.webKit) { // 是否为苹果、谷歌内核
                return 1;
            } else {
                return 0;
            }
        } else {
// 是否为android终端
            if (browser.versions.android) {
                return 2;
            } else if (browser.versions.iPhone) { //是否为iPhone终端
                return 3;
            } else {
                return 0;
            }
        }*/
    }

}

Home.propTypes = {};

function dispatcher(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(state => state.Home, dispatcher)(Home);