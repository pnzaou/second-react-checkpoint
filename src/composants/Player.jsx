import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({nom, club, nat, num, age, img}) => {

    const cardStyle = {
        width: '18rem',
        margin: '10px'
    }

    return (
        <Card  className="col-md-6" style={cardStyle}>
            <Card.Header className='row'>
                <img className="col-md-7" src={img} alt={`Photo de ${nom}`} height={100} width={100}/>
                <div className="col-md-5 text-center">
                    <Card.Title>{num}</Card.Title>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{nom} {age} ans</Card.Title>
                <Card.Text>{nat}</Card.Text>
                <Card.Text>{club}</Card.Text>
            </Card.Body>
        </Card>
    );
}

  
Player.defaultProps = {
    nom: "Unknown Player",
    club: "Unknown Team",
    nat: "Unknown Nationality",
    num: 0,
    age: 0,
    img: "https://via.placeholder.com/150"
};

export default Player;
