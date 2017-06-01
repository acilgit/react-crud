/**
 * Created by XY on 2017-05-15.
 */
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


import PropTypes from 'prop-types';

import BlankGameForm from '../components/BlankGameForm';
import allActions from '../redux/actions'
import * as types from '../redux/actions/actionTyps'

class GameForm extends React.Component {

    componentWillUnmount() {
        console.log('WillUnmount GameForm');
        let {done, actions} = this.props;
        done && actions.setProps(types.gameForm, {done: false});
    }

    _onClick = () => {
        console.log(this.refs.bForm.getWrappedInstance().refs.myForm);
        this.refs.bForm.getWrappedInstance().refs.myForm.submit();

        // this.refs.myForm.getWrappedInstance().submit();
    };

    render() {
        let {title, cover, errors, loading, done, actions} = this.props;
        return (
            <dii>
                {done ? <Redirect to="/games"/> :
                    <div>
                        <BlankGameForm ref="bForm"
                            actions={actions}
                            title={title}
                            cover={cover}
                            errors={errors}
                            loading={loading}/>
                        <button className="ui button" form="myForm">Saving Outside</button>
                        <button className="ui button" onClick={this._onClick}>Saving Outside</button>
                    </div>
                }
            </dii>
        )
    }
}

GameForm.propTypes = {};

function dispatcher(dispatch) {
    return {actions: bindActionCreators(allActions, dispatch)}
}

export default connect(state => state.GameForm, dispatcher)(GameForm);