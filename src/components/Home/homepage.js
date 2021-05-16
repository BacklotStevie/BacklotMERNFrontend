import React from 'react';
import Reviews from '../../components/ReviewPage/reviews';
import { CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Logo from '../../Images/backlot-logo.png'
import Disney from '../../Images/Disney Investory Day.jpg'
import Wolfwalkers from '../../Images/wolfwalkers.jpg'
import './homepage.css'

const HomePage = () => {
    return (
        <div className="container">
            <div className="">
                <div className="jumbotron home-jumbo mt-5 pt-5 d-flex flex-wrap bg-medium">
                    <div className="col-12 col-lg-6">
                        <img className="featured-jumbo" src="https://variety.com/wp-content/uploads/2020/04/Invincible.jpg?w=1000" />
                    </div>
                    <div className="col-12 col-lg-6" >
                        <h1 className="display-5 pt-5 text-black">Invincible vs The Falcon and Winter Soldier</h1>
                        <p className="lead text-black">Steven, JP and John compare Amazon's <i>Invincible</i> & Marvel's <i>The Falcon and the Winter Soldier</i>.<br /><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=1000521517803'>Listen on Apple Podcasts</a><br /><a href='https://open.spotify.com/episode/16x53tGDRgC5wJGUnMKvif?si=c126d3c982e4484b'>Listen on Spotify</a></p>
                    </div>
                </div>
            </div>

            <div className="container section-divider pt-5">
                <button className="divider-button bg-dark" disabled></button>
            </div>

            <h3 className="text-center sections">PODCASTS</h3>

            <CardDeck className="podcasts pb-5">
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://www.denofgeek.com/wp-content/uploads/2021/03/Invincible-Amazon-Review.jpg?fit=1920%2C1080" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>We Need to Talk About Invincible</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven, JP & John discuss Amazon Prime's <i>Invincble</i>.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/16x53tGDRgC5wJGUnMKvif?si=d574f37e712243b4'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=1000521517803'>Listen On Apple Podcasts</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://miro.medium.com/max/3840/0*CnpPQBdzDHEYcsD2.jpeg" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Mortal Kombat</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven, JP & John pontificate about this year's indie gem, <i>Mortal Kombat.</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/5VvfYv5Bzm6BveQcMMz0cJ?si=a55e060313984fef'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=1000519515819'>Listen On Apple Podcasts</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://cdn.onebauer.media/one/media/605b/69a9/dbf2/7f24/48f5/9560/godzilla-vs-kong.jpg?format=jpg&quality=80&width=850&ratio=16-9&resize=aspectfill" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>93rd Annual Academy Awards Recap</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss the odd choices made during this year's Oscars ceremony.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/6ya8oqcI7suFTGCtmpugSc?si=70d3e7e3f9d44299'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=10005188749573'>Listen On Apple Podcasts</a></h6>
                    </Card.Footer>
                </Card>
            </CardDeck>

            <div className="container section-divider">
                <button className="divider-button bg-dark" disabled></button>
            </div>

            <h3 className="text-center sections">BLOG POSTS</h3>

            <Reviews />

        </div>
    );
};

export default HomePage;