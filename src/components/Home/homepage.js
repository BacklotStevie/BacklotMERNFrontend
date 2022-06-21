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
                        <img className="featured-jumbo" src="https://image.cnbcfm.com/api/v1/image/107077136-1655401835436-lightyear_Cropped.jpg?v=1655401936&w=1600&h=900" />
                    </div>
                    <div className="col-12 col-lg-6" >
                        <h1 className="display-5 pt-5 text-black">Lightyear, Jurassic World Dominion & Top Gun: Maverick</h1>
                        <p className="lead text-black">Steven and John are back to discuss this trio of recently released blockbusters.<br /><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=1000567288804'>Listen on Apple Podcasts</a><br /><a href='https://open.spotify.com/episode/4qNO5RORWgr2bcOGPOFSnn?si=s-lgYz4VTSiCiNy_Biu5rw
https://open.spotify.com/episode/4qNO5RORWgr2bcOGPOFSnn?si=s-lgYz4VTSiCiNy_Biu5rw'>Listen on Spotify</a></p>
                    </div>
                </div>
            </div>

            <div className="container section-divider pt-5">
                <button className="divider-button bg-dark" disabled></button>
            </div>

            <h3 className="text-center sections">PODCASTS</h3>

            <CardDeck className="podcasts pb-5">
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://www.hollywoodreporter.com/wp-content/uploads/2022/04/LIGHTYEAR-ONLINE-USE-b625_15k_pub.pub16.474-H-2022.jpg?w=681&h=383&crop=1" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Lightyear, Jurassic World Dominion and Top Gun: Mavericl</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John are back to discuss this trio of recently released films.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/4qNO5RORWgr2bcOGPOFSnn?si=s-lgYz4VTSiCiNy_Biu5rw'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=1000567288804'>Listen On Apple Podcasts</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://www.denofgeek.com/wp-content/uploads/2021/03/Invincible-Amazon-Review.jpg?fit=1920%2C1080" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>We Need To Talk About Invincible</Card.Title>
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
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BOWEwNGJiZWYtNTc3NC00N2QyLWIzOTQtM2YwOTY2N2NmYWQ2XkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Mortal Kombat</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven, JP & John discuss 2021's indie gem, <i>Mortal Kombat.</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/5VvfYv5Bzm6BveQcMMz0cJ?si=a55e060313984fef'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=1000519515819'>Listen On Apple Podcasts</a></h6>
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