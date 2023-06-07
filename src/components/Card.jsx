import React from 'react';
import {Link} from 'react-router-dom';

const Card = () => {

    return (
        <Card>
            <Card.Img variant="top" src="holder.js/100px180"/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
                <Link to={'/'}>Go somewhere</Link>{' '}
            </Card.Body>
        </Card>
    );
};

export default Card;
