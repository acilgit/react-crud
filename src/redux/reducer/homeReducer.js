/**
 * Created by XY on 2017-05-15.
 */
import * as types from '../actions/actionTyps';

let initialState = {
    text1: '',
    text2: '',
    title1: '',
    title2: ''
};

export default function (state = initialState, actions) {
    switch (actions.type) {
        case types.home:
        //     return Object.assign({}, state, actions.state);
        default:
            return state;
    }
}