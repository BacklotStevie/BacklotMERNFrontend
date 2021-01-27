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
            <div className="row">
                <div className="jumbotron col-12 home-jumbo pb-2 pt-5 mt-5 pr-5 d-flex align-items-center bg-medium">
                    <div className="col-8 mb-5">
                        <img className="featured-jumbo" src="https://cnet2.cbsistatic.com/img/6hBpTES0Zkehs04k5kZkUQ7wdzM=/940x0/2021/01/13/12b59056-0831-4889-b7ff-1f0910bc1505/wandavision-disney-plus-marvel-ep16.jpg" />
                    </div>
                    <div className="col-4" >
                        <h1 className="display-5 text-black mr-4 mb-4">Backlot's Top 10 Films of 2020</h1>
                        <p className="lead text-black mr-4 mb-5">It's finally here! Steven and John discuss their top 10 films of 2020.<br /><a href='https://podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563#episodeGuid=insidethebacklot.podbean.com%2F52e637f7-0b50-3cae-89e3-0f3d23bb5a80'>Listen on Apple Podcasts</a><br /><a href='https://open.spotify.com/episode/57F8QBetc1z6fYKd6eRVkE?si=1B1tMqJaT-2B1Hb1cyscDw'>Listen on Spotify</a></p>
                    </div>
                </div>
            </div>

            <div className="container section-divider pt-5">
                <button className="divider-button bg-dark" disabled></button>
            </div>

            <h3 className="text-center sections">PODCASTS</h3>

            <CardDeck className="podcasts pb-5">
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://www.rollingstone.com/wp-content/uploads/2020/12/RS-EndofYearLists_2020_MOVIES.jpg" />
                    <Card.Body className="card-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Top 10 Films of 2020</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss their top 10 films of 2020.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/1DePsWGat43dXBHpJ6Lvlt?si=z6v6avJFSIuhZevjW-563A'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/disney-investor-day-mayhem/id1460214563?i=1000502128805'>Listen On Apple Podcasts</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://cnet2.cbsistatic.com/img/6hBpTES0Zkehs04k5kZkUQ7wdzM=/940x0/2021/01/13/12b59056-0831-4889-b7ff-1f0910bc1505/wandavision-disney-plus-marvel-ep16.jpg" />
                    <Card.Body className="card-body">
                        <Card.Title style={{ fontSize: "2rem" }}>WandaVision Episodes 1 & 2</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss the first two episodes of <i>WandaVision.</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/1DePsWGat43dXBHpJ6Lvlt?si=z6v6avJFSIuhZevjW-563A'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/disney-investor-day-mayhem/id1460214563?i=1000502128805'>Listen On Apple Podcasts</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src={Wolfwalkers} />
                    <Card.Body className="card-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Mando S2 Finale, Wolfwalkers & Sound of Metal</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss <i>The Mandalorian's</i> season finale and some films of the week.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/0Uu87x0S4wH19QNyw9ssDO?si=WbkjyPxpQqSCJLQ78DEu2w'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/bonus-episode-mando-s2-finale-sound-of-metal-wolfwalkers/id1460214563?i=1000503467681'>Listen On Apple Podcasts</a></h6>
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