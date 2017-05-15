/**
 * Created by XY on 2017-05-15.
 */
import * as types from './actionTyps';

let actions ={
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

function setAction(type, state) {
    return {
        type: type,
        state: state
    }
}

export default actions;