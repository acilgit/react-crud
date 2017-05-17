/**
 * Created by XY on 2017-05-15.
 */
import * as types from '../actions/actionTyps';

let initialState = {
    title: '',
    cover: '',
    errors: {},
    loading: false,
    done: false
};

export default function (state = initialState, actions) {
    switch (actions.type) {
        case types.gameForm:
            return Object.assign({}, state, actions.state);
        default:
            return state;
    }
}