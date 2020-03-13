import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

export default class Playerslist extends React.Component {
    constructor() {
        super();
        this.state = {
            players: [],
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(res => {
                console.log(res.data);
                this.setState({
                    players: res.data
                })
            })
            .catch(err => {console.log(err.message)
            });
    }

    render() {
        return(
            <div>
                {this.state.players.map(player =>
                    {console.log(player)
                        return(
                    <PlayerCard 
                        name={player.name}
                        country={player.country}
                        searches={player.searches}
                    />
                    )}
                )}
            </div>
        )
    }
}