import React from "react";
import Card from "react-bootstrap/Card";
import { CardDeck, Button } from "react-bootstrap"
import albumCover from '../assets/image0.png';
//import Button from '@material-ui/core/Button';

const Aboutus = () => {
    return (
        <div class='main'>
            <h2 style={{ padding: "35px" }}>The Creators! </h2>
            <CardDeck style={{ justifySelf: "center" }}>
                <Card style={{ maxWidth: 400, backgroundColor: '#393e46' }}>
                    <Card.Img variant="top" src={albumCover} />
                    <Card.Body>
                        <Card.Title >Rebecca Zumaeta</Card.Title>
                        <Card.Subtitle style={{fontStyle:'italic', fontSize: 14}}>Team Lead</Card.Subtitle> <br/>
                        <Card.Text>
                            Hi, I am Rebecca!
                        </Card.Text>
                        <Button variant="primary" href="" style={{backgroundColor: '#00adb5'}}>Go to Rebeccas's github</Button>
                    </Card.Body>
                </Card>
                <Card style={{ maxWidth: 400, backgroundColor: '#393e46' }}>
                    <Card.Img variant="top" src={albumCover} />
                    <Card.Body>
                        <Card.Title >Bryan Fetner</Card.Title>
                        <Card.Subtitle style={{fontStyle:'italic', fontSize: 14}}>Frontend Lead</Card.Subtitle> <br/>
                        <Card.Text>
                            Hi, I am Bryan!
                        </Card.Text>
                        <Button variant="primary" href="" style={{backgroundColor: '#00adb5'}}>Go to Bryan's github</Button>
                    </Card.Body>
                </Card>
                <Card style={{ maxWidth: 400, backgroundColor: '#393e46' }}>
                    <Card.Img variant="top" src={albumCover} />
                    <Card.Body>
                        <Card.Title >Ashwini Managuli</Card.Title>
                        <Card.Subtitle style={{fontStyle:'italic', fontSize: 14}}>Backend Lead</Card.Subtitle> <br/>
                        <Card.Text>
                            Hi, I am Ashwini!
                        </Card.Text>
                        <Button variant="primary" href="" style={{backgroundColor: '#00adb5'}}>Go to Ashwini's github</Button>
                    </Card.Body>
                </Card>
            </CardDeck><br/>
            <CardDeck style={{ justifySelf: "center" }}>
                <Card style={{ maxWidth: 400, backgroundColor: '#393e46' }}>
                    <Card.Img variant="top" src={albumCover} />
                    <Card.Body>
                        <Card.Title >Malcolm Angelo De Villar</Card.Title>
                        <Card.Subtitle style={{fontStyle:'italic', fontSize: 14}}>Frontend member</Card.Subtitle> <br/>
                        <Card.Text>
                            Hi, I am Malcolm!
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/mdevillar0" style={{backgroundColor: '#00adb5'}}>Go to Malcolm's github</Button>
                    </Card.Body>
                </Card>
                <Card style={{ maxWidth: 400, backgroundColor: '#393e46' }}>
                    <Card.Img variant="top" src={albumCover} />
                    <Card.Body>
                        <Card.Title >Hirva Patel</Card.Title>
                        <Card.Subtitle style={{fontStyle:'italic', fontSize: 14}}>Frontend member</Card.Subtitle> <br/>
                        <Card.Text>
                            Hi, I am Hirva!
                        </Card.Text>
                        <Button variant="primary" href="" style={{backgroundColor: '#00adb5'}}>Go to Hirva's github</Button>
                    </Card.Body>
                </Card>
                <Card style={{ maxWidth: 400, backgroundColor: '#393e46' }}>
                    <Card.Img variant="top" src={albumCover} />
                    <Card.Body>
                        <Card.Title >Luong Dang</Card.Title>
                        <Card.Subtitle style={{fontStyle:'italic', fontSize: 14}}>Backend member</Card.Subtitle> <br/>
                        <Card.Text>
                            Hi, I am Luong!
                        </Card.Text>
                        <Button variant="primary" href="" style={{backgroundColor: '#00adb5'}}>Go to Luong's github</Button>
                    </Card.Body>
                </Card>
                <Card style={{ maxWidth: 400, backgroundColor: '#393e46' }}>
                    <Card.Img variant="top" src={albumCover} />
                    <Card.Body>
                        <Card.Title >Vishakha Tyagi</Card.Title>
                        <Card.Subtitle style={{fontStyle:'italic', fontSize: 14}}>Backend member</Card.Subtitle> <br/>
                        <Card.Text>
                            Hi, I am Vishakha!
                        </Card.Text>
                        <Button variant="primary" href="" style={{backgroundColor: '#00adb5'}}>Go to Vishakha's github</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
            <br/>
        </div>
    )
}

export default Aboutus;