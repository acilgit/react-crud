/**
 * Created by XY on 2017-05-15.
 */
import {combineReducers} from 'redux';
import games from './gamesReducer';
import home from './homeReducer';
import gameForm from './gameFormReducer';

export default combineReducers({
    Home: home,
    Games: games,
    GameForm: gameForm
});