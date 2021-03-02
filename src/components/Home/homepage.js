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
                        <img className="featured-jumbo" src="https://cnet3.cbsistatic.com/img/gJmjeR-W6L38viJAB-fS45nJs3Y=/940x0/2021/02/26/893ade18-73a5-4575-b9c2-55df1af95ef1/sok0430-108-comp-v001-20210113-r709-83560aac.jpg" />
                    </div>
                    <div className="col-12 col-lg-6" >
                        <h1 className="display-5 pt-5 text-black">Golden Globes + WandaVision</h1>
                        <p className="lead text-black">Steven and John discuss this weekend's Golden Globes and episodes 7 & 8 of <i>WandaVision</i>.<br /><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563#episodeGuid=insidethebacklot.podbean.com%2Fccb3c7db-ea3f-3ae8-92b3-48d9dc3eb799'>Listen on Apple Podcasts</a><br /><a href='https://open.spotify.com/episode/3vOHndpARiIbbe3w9Azoao?si=GlR2-Es9S5ybrvHMMLmlAQ'>Listen on Spotify</a></p>
                    </div>
                </div>
            </div>

            <div className="container section-divider pt-5">
                <button className="divider-button bg-dark" disabled></button>
            </div>

            <h3 className="text-center sections">PODCASTS</h3>

            <CardDeck className="podcasts pb-5">
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/02/wandavision-episode-8-olsen-bettany-marvel-social-featured.png" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Golden Globes + WandaVision</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss this weekend's Golden Globes and episodes 7 & 8 of <i>WandaVision</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/3vOHndpARiIbbe3w9Azoao?si=GlR2-Es9S5ybrvHMMLmlAQ'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563#episodeGuid=insidethebacklot.podbean.com%2Fccb3c7db-ea3f-3ae8-92b3-48d9dc3eb799'>Listen On Apple Podcasts</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://variety.com/wp-content/uploads/2020/11/Judas-and-the-Black-Messiah.jpg?w=681&h=383&crop=1g" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>WandaVision, Judas and Black Messiah & More</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss episodes 5 & 6 of <i>WandaVision</i>, as well as some other films they watched that week.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/0xlT6igfbYvBTcoge1svRl?si=HJv7CnhZQBmKdn_UObwQXQ'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=1000509702676'>Listen On Apple Podcasts</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/dvi1240_104_comp_v022_r709.127613_0.jpg" />
                    <Card.Body className="podcast-body">
                        <Card.Title style={{ fontSize: "2rem" }}>WandaVision Eps. 3 & 4</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss episodes 3 & 4 of <i>WandaVision.</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/23sqyOrPx9pCeMRLsGF6La?si=MFkJ8lXrQ8WsCBzp_3Qmow'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563?i=1000507636894'>Listen On Apple Podcasts</a></h6>
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