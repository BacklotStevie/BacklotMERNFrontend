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
                        <img className="featured-jumbo" src="https://www.shortlist.com/media/imager/202206/56613-original.jpg" />
                    </div>
                    <div className="col-12 col-lg-6" >
                        <h1 className="display-5 pt-5 text-black">Thor: Love and Thunder</h1>
                        <p className="lead text-black">Steven and John Marvel's latest film, <i>Thor: Love and Thunder</i>.<br /><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=1000570744034'>Listen on Apple Podcasts</a><br /><a href='https://open.spotify.com/episode/3ocnoSdNQEUjEy4CV3u6Wc?si=16c56369cfc84941'>Listen on Spotify</a></p>
                    </div>
                </div>
            </div>

            <div className="container section-divider pt-5">
                <button className="divider-button bg-dark" disabled></button>
            </div>

            <h3 className="text-center sections">PODCASTS</h3>

            <CardDeck className="podcasts pb-5">
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://www.cnet.com/a/img/resize/4dd4458d590efe4d555dad15f026691dd2eb313f/2022/05/26/e3d5b150-9198-47cd-9716-82fae2f5037d/thor-love-and-thunder-6.jpg?auto=webp&fit=crop&height=675&width=1200" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Thor: Love and Thunder</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss the MCU's latest entry: <i>Thor: Love and Thunder.</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/3ocnoSdNQEUjEy4CV3u6Wc?si=16c56369cfc84941'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=1000570744034'>Listen On Apple Podcasts</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://consequence.net/wp-content/uploads/2022/06/elvis-review-austin-butler-2.jpg?quality=80&w=1031&h=580&crop=1&resize=1031%2C580&strip" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Obi-Wan Kenobi & Elvis</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss Disney's <i>Obi-Wan Kenobi</i> & <i>Elvis</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/3U1vWaWjuDdkfijG71bAoe?si=0zHxrXIjSQeXb2X77-QDyw&context=spotify%3Ashow%3A4qRzBpNjTMGSKWTixYZQtY'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=1000568028724'>Listen On Apple Podcasts</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://www.hollywoodreporter.com/wp-content/uploads/2022/04/LIGHTYEAR-ONLINE-USE-b625_15k_pub.pub16.474-H-2022.jpg?w=681&h=383&crop=1" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Lightyear, Jurassic World Dominion and Top Gun: Maverick</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John are back to discuss this trio of films.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/4qNO5RORWgr2bcOGPOFSnn?si=s-lgYz4VTSiCiNy_Biu5rw'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=1000567288804'>Listen On Apple Podcasts</a></h6>
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