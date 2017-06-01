/**
 * Created by XY on 2017-05-25.
 */

import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import * as types from '../redux/actions/actionTyps'

class BlankGameForm extends React.Component {

    _onChange = (e) => {
        let valName = e.target.name;
        let errors = this.props.errors;
        if (!!this.props.errors[valName]) {
            delete errors[valName];
        }
        this.props.actions.setProps(types.gameForm, {[valName]: e.target.value, errors})
    };

    _onSubmit = (e) => {
        e.preventDefault();
        // validation
        let errors = {};
        const {title, cover, actions} = this.props;
        if (title === '') errors.title = "Can't be empty";
        if (cover === '') errors.cover = "Can't be empty";
        actions.setProps(types.gameForm, {errors});
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            this.props.actions.setProps(types.gameForm, {loading: true});
            this.props.actions.saveGame({title, cover}).then(data => console.log('then ', data));
        }
    };

    render() {
        let {title, cover, errors, loading} = this.props;
        return (
            <div>
                <form id="myForm" ref="myForm" className={classnames("ui form", {loading: loading})}
                      onSubmit={this._onSubmit}>
                    <h1>Add new game </h1>

                    {!!errors.global && <div className="ui negative message"><p>{errors.global}</p></div>}
                    <div className={classnames("field", {error: !!errors.title})}>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title"
                               name="title"
                               value={title}
                               onChange={this._onChange}/>
                        <span>{errors.title}</span>
                    </div>

                    <div className={classnames("field", {error: !!errors.cover})}>
                        <label htmlFor="title">Cover URL</label>
                        <input type="text" id="cover"
                               name="cover"
                               value={cover}
                               onChange={this._onChange}/>
                        <span>{errors.cover}</span>
                    </div>

                    <div className="filed crop-img">
                        <img style={ {height: "100%", width: "100%"}}
                             src={cover} alt="cover"
                             className="ui small cover bordered"/>
                    </div>

                    <div className="field">
                        <button className="ui primary button">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

BlankGameForm.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

export default connect(null, null, null, {withRef: true})(BlankGameForm);