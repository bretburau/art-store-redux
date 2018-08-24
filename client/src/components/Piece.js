import React from 'react'
import {Link} from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

const Piece = (props) => {
    return(
        <Col md="4">
            <Card>
                <CardImg top width='80%' height="50%" src={props.piece.picture.url} />
                <CardBody>
                    <CardTitle>{props.piece.name}</CardTitle>
                    <CardSubtitle>Subtitle</CardSubtitle>
                    <CardText>Card Text</CardText>
                    <Button>View</Button>
                </CardBody>
                {/* <Link to={`/pieces/${props.piece.id}`}>{props.piece.name}</Link> */}
                {/* <img src={props.piece.picture.url} height='150' /> */}
            </Card>
        </Col>
    )
}

export default Piece;