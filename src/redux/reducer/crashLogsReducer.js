/**
 * Created by XY on 2017-05-15.
 */
import * as types from '../actions/actionTyps';

let initialState = {
    page: 1,
    pageSize: 20,
    list: []
};

export default function (state = initialState, actions) {
    switch (actions.type) {
        case types.crashLogs:
            return Object.assign({}, state, actions.state);
        default:
            return state;
    }
}