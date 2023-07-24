import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import five from '../image/5.jpg';
import six from '../image/6.jpg';
import seven from '../image/7.jpg';
import eight from '../image/8.jpg';
import nine from '../image/9.jpg';
import ten from '../image/10.jpg';



function Destination() {
    return (
        <>
            <h1 className='text-center'>Destination Page</h1>
            <br /><br />
            <div className='container'>
                <div className='row'>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={five} />
                            <Card.Body>
                                <Card.Title>Kedarnath Temple</Card.Title>
                                <Card.Text>
                                    Kedarnath temple is not only famous among the tourists who are religiously inclined.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={six} />
                            <Card.Body>
                                <Card.Title>Badrinath Temple</Card.Title>
                                <Card.Text>
                                Badrinath Temple is quite sacred among the Hindu people because it is believed.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={seven} />
                            <Card.Body>
                                <Card.Title>Jagannath temple</Card.Title>
                                <Card.Text>
                                Jagannath temple is located at Puri in the state of Odisha, and it is one of the most famous temples.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={eight} />
                            <Card.Body>
                                <Card.Title>Meenakshi Temple</Card.Title>
                                <Card.Text>
                                Though Meenakshi temple was built in the 12th century, the architectural magnificence.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={nine} />
                            <Card.Body>
                                <Card.Title>Rameshwaram Temple</Card.Title>
                                <Card.Text>
                                    Rameshwaram temple is quite famous and believed to be sacred by the people of Hindu religion all around the world.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ten} />
                            <Card.Body>
                                <Card.Title>Brihadeeswara Temple</Card.Title>
                                <Card.Text>
                                    Brihadeeswara temple is located in the Thanjavur city of Tamil Nadu, and it is one of the most famous and ancient temples in India.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export default Destination; 