import React from "react";

export default function PlayerCard(props) {
    return(
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Country: {props.country}</h3>
            <h3>Searches: {props.searches}</h3>
        </div>
    );
}