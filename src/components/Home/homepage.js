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
                        <img className="featured-jumbo" src="https://cdn.mos.cms.futurecdn.net/QMpD8xrRXF7QoZwgX2XpPE-1200-80.jpg" />
                    </div>
                    <div className="col-12 col-lg-6" >
                        <h1 className="display-5 pt-5 text-black">Zack Snyder's Justice League</h1>
                        <p className="lead text-black">The boys discuss their thoughts and criticisms of the long-awaited Snydercut.<br /><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563#episodeGuid=insidethebacklot.podbean.com%2Ff5fb0705-7723-3bcf-a7ea-807ee3fc2627'>Listen on Apple Podcasts</a><br /><a href='https://open.spotify.com/episode/3Xt9I51IH6cIew2b081Syu?si=hCfLZFSvRy65ozOePbGS2A'>Listen on Spotify</a></p>
                    </div>
                </div>
            </div>

            <div className="container section-divider pt-5">
                <button className="divider-button bg-dark" disabled></button>
            </div>

            <h3 className="text-center sections">PODCASTS</h3>

            <CardDeck className="podcasts pb-5">
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/03/zack-snyders-justice-league-team-social.jpg" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Zack Snyder's Justice League</Card.Title>
                        <Card.Text className="podcast-text">
                            The boys discuss their thoughts and criticisms of the long-awaited Snydercut.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/3Xt9I51IH6cIew2b081Syu?si=xU7sEKV4RJiHJ5U_fx4-4w'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563#episodeGuid=insidethebacklot.podbean.com%2Ff5fb0705-7723-3bcf-a7ea-807ee3fc2627'>Listen On Apple Podcasts</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2020/12/raya-and-the-last-dragon-social-1.jpg" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>WandaVision Finale & Raya and the Last Dragon</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss the season finale of <i>WandaVision</i> & <i>Raya and the Last Dragon.</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/42cWg4mkDTz0yCQrGx9FRh?si=fvAcqvVGQImDZaU5biZJ6Q'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=1000512222954'>Listen On Apple Podcasts</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/02/wandavision-episode-8-olsen-bettany-marvel-social-featured.png" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Golden Globes + WandaVision</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss this weekend's Golden Globes and episodes 7 & 8 of <i>WandaVision</i>.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/3vOHndpARiIbbe3w9Azoao?si=GlR2-Es9S5ybrvHMMLmlAQ'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=1000511378732'>Listen On Apple Podcasts</a></h6>
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