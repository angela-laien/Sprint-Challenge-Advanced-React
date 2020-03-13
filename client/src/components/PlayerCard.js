import React from "react";
import { Col, Card, CardBody } from "reactstrap";

export default function PlayerCard(props) {
    return(
        <Col xs="6" md="4" xl="3">
            <Card>
                <CardBody>
                    <h5>Name: {props.name}</h5>
                    <h6>Country: {props.country}</h6>
                    <h6>Searches: {props.searches}</h6>
                </CardBody>
            </Card>
        </Col> 
    );
}