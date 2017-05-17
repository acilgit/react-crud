/**
 * Created by XY on 2017-05-15.
 */
import * as types from './actionTyps';

let actions ={
    setProps: function (actionType, state) {
        return setAction(actionType, state);
    },
    saveGame: function (data) {
        return (dispatch) => {
            fetch('/api/games',{
                method: 'post',
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json"}
            }).then(res => {
                if (res.ok) {
                    return res.json();
                }else {
                    let error = new Error(res.statusText);
                    error.response = res;
                    console.log(res.statusText);
                    throw error;
                }
            }).then(json => {
                    console.log('ok!11', json);
                    dispatch(setAction(types.gameForm, {done: true}))
                },
                (err) => {
                    console.log(err);
                    err.response.json().then(({errors}) => dispatch(setAction(types.gameForm, {errors, loading: false})))
                }
            );
        }
    },
    fetchGames: function () {
        return dispatch => {
            fetch('/api/games').then(res => res.json())
                .then(data => dispatch(actions.setGamesList(data.games))
            );
        }
    },
    setGamesList: function (games) {
        return setAction(types.games, {list:games})
    },
    textChange: function(event) {
        return (dispatch, getState) => {
            let valueName = event.target.name;
            console.log(getState());
            dispatch(setAction('TEXT_CHANGE', {[valueName]: event.target.value}))
        }
    }/*,
    inputtextChange: function(event) {
        return (dispatch, getState) => {
            let valueName = event.target.name;
            if (!!getState.errors) {
                if (!!getState.errors[valueName]) {
                    let errors = Object.assign({}, getState.errors);
                    delete errors[valueName];
                    this.setState({
                        [valueName]: event.target.value,
                        errors
                    })
                } else {
                    this.setState({

                    })
                }
            }
            dispatch(setAction())
        }
    }*/
};

function handleRes(res){
    if (res.ok) {
        return res.json();
    }else {
        let error = Error(res.statusText);
        error.response = res;
        console.log(res.statusText);
        throw error;
    }
}

function setAction(type, state) {
    return {
        type: type,
        state: state
    }
}

export default actions;