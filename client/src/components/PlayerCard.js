import React from "react";

export default function PlayerCard(props) {
    return(
        <div>
            <h2>Name: {props.name}</h2>
            <h4>Country: {props.country}</h4>
            <h5>Searches: {props.searches}</h5>
        </div>
    );
}