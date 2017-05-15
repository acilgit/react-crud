/**
 * Created by XY on 2017-05-15.
 */
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classnames from 'classnames';


// import PropTypes from 'prop-types';

import actions from '../redux/actions'

class GameForm extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            title: '',
            cover: '',
            errors: {},
            loading: false
        };
    }

    _handleChange = (e) => {
        let valName = e.target.name;
        if (!!this.state.errors[valName]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[valName];
            this.setState({
                [valName]: e.target.value,
                errors
            })
        } else {
            this.setState({
                [valName]: e.target.value
            })
        }
    };

    _handleSubmit = (e) => {
        e.preventDefault();
        // validation
        let errors = {};
        if (this.state.title === '') errors.title = "Can't be empty";
        if (this.state.cover === '') errors.cover = "Can't be empty";
        this.setState({errors});
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            const {title, cover} = this.state;
            this.setState({loading: true});
            this.props.actions.saveGame({title, cover}).then(
                () => { console.log('ok');},
                (err) => {
                    console.log(err);
                    err.response.json().then(({errors}) => this.setState({errors, loading: false}))
                });
        }
    };

    render() {
        return (
            <form className={classnames("ui", "form", {loading: this.state.loading})}
                  onSubmit={this._handleSubmit}>
                <h1>Add new game</h1>

                {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}
                <div className={classnames("field", {error: !!this.state.errors.title})}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title"
                           name="title"
                           value={this.state.title}
                           onChange={this._handleChange}/>
                    <span>{this.state.errors.title}</span>
                </div>

                <div className={classnames("field", {error: !!this.state.errors.cover})}>
                    <label htmlFor="title">Cover URL</label>
                    <input type="text" id="cover"
                           name="cover"
                           value={this.state.cover}
                           onChange={this._handleChange}/>
                    <span>{this.state.errors.cover}</span>
                </div>

                <div className="filed">
                    {this.state.cover !== '' &&
                    <img src={this.state.cover} alt="cover" className="ui small bordered image"/>}
                </div>

                <div className="field">
                    <button className="ui primary button">Save</button>
                </div>

            </form>
        )
    }
}

GameForm.propTypes = {};

function dispatcher(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(state => state.GameForm, dispatcher)(GameForm);