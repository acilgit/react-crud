/**
 * Created by 18953 on 2017/5/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function GameCard({game}) {
    return (
        <div className="ui card">
            <div className="image">
                <img src={game.cover} alt="游戏封面"/>
            </div>
            <div className="content">
                <div className="header">{game.title}</div>
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <Link to={`/game/${game._id}`} className="ui basic button blue">编辑</Link>
                    <Link to={`/game/${game._id}`} className="ui basic button red">删除</Link>
                </div>
            </div>
        </div>
    )
}

GameCard.propTypes = {
    game:PropTypes.object.isRequired
};

export default GameCard