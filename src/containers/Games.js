import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../redux/actions'
import GamesList from '../components/GamesList';

class Games extends React.Component{

    componentDidMount() {
        this.props.actions.fetchGames();
    }
    render() {
        let {list, actions} = this.props;

        return (
            <div>
               <h1>
                   Games List
               </h1>
                <GamesList list={list} fetchGames={actions.fetchGames}/>
            </div>
        )
    }
}

Games.propTypes = {
    list: PropTypes.array.isRequired
};

function dispatcher(dispatch){
    return {actions:bindActionCreators(actions, dispatch)}
}

export default connect(state => state.Games, dispatcher)(Games);