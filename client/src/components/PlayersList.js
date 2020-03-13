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

    componentsDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(res => {
                console.log(res);
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
                {this.state.players.map(players =>
                    <PlayerCard 
                        name={players.name}
                        country={players.country}
                        searches={players.searches}
                    />
                )}
            </div>
        )
    }
}