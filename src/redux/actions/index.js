/**
 * Created by XY on 2017-05-15.
 */
import * as types from './actionTyps';

let actions ={
    saveGame: function (data) {
        return dispatch => {
            fetch('/api/games',{
                method: 'post',
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json"}
            }).then(handleRes);
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
        return setAction(types.fetchGames, {list:games})
    }
};

function handleRes(res){
    if (res.ok) {
        return res.json();
    }else {
        let error = new Error(res.statusText);
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