import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

import { withRouter } from 'react-router-dom';
import './Card.styles.css';

const MyCard = (props) => (

    <Card className='card'>
        <CardImg top width="100%" src={props.image} alt={props.name} height='60%'/>
        <hr />
        <CardBody>
            <h2>{props.name}</h2>
            <CardText>{props.desc}</CardText>
            <Button onClick={() => props.history.push(`${props.link}`)} color="primary">Go</Button>
        </CardBody>
    </Card>

);

export default withRouter(MyCard);