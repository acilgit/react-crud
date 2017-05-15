/**
 * Created by XY on 2017-05-15.
 */
import * as types from '../actions/actionTyps';

let initialState = {

};

export default function (state = initialState, actions) {
    switch (actions.type) {
        case types.saveGame:
            return Object.assign({}, state, actions.state);
        default:
            return state;
    }
}