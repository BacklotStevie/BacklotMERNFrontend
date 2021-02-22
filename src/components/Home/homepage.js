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
                        <img className="featured-jumbo" src="https://variety.com/wp-content/uploads/2020/09/mm_still1.jpg" />
                    </div>
                    <div className="col-4" >
                        <h1 className="display-5 text-black mr-4 mb-4">WandaVision and More!</h1>
                        <p className="lead text-black mr-4 mb-5">Steven and John discuss some of the films they've been watching this week before discussing some more WandaVision.<br /><a href='https://podcasts.apple.com/us/podcast/wandavision-judas-black-messiah-malcom-marie-more/id1460214563?i=1000509702676'>Listen on Apple Podcasts</a><br /><a href='https://open.spotify.com/episode/0xlT6igfbYvBTcoge1svRl?si=nApXV5mST9SKTVzwqFP14w'>Listen on Spotify</a></p>
                    </div>
                </div>
            </div>

            <div className="container section-divider pt-5">
                <button className="divider-button bg-dark" disabled></button>
            </div>

            <h3 className="text-center sections">PODCASTS</h3>

            <CardDeck className="podcasts pb-5">
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://variety.com/wp-content/uploads/2020/11/Judas-and-the-Black-Messiah.jpg?w=681&h=383&crop=1g" />
                    <Card.Body className="card-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Wandavision, Judas and Black Messiah & More!</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss episodes 5 & 6 of <i>Wandavision</i>, as well as some films they watched thiss week.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/0xlT6igfbYvBTcoge1svRl?si=nApXV5mST9SKTVzwqFP14w'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/wandavision-judas-black-messiah-malcom-marie-more/id1460214563?i=1000509702676'>Listen On Apple Podcasts</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://www.denofgeek.com/wp-content/uploads/2021/01/wandavision-episode-4-mcu-marvel-easter-eggs.jpg?resize=768%2C432" />
                    <Card.Body className="card-body">
                        <Card.Title style={{ fontSize: "2rem" }}>WandaVision Episodes 3 & 4 Theories, Rumors & Thoughts!</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss episodes 3 & 4 of <i>WandaVision.</i>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/23sqyOrPx9pCeMRLsGF6La?si=s4hQptxbTr2Tg9X4NrqQiw'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/wandavision-ep-3-4-discussion-theories-rumors-thoughts/id1460214563?i=1000507636894'>Listen On Apple Podcasts</a></h6>
                    </Card.Footer>
                </Card>
                <Card className='podcast-card'>
                    <Card.Img variant="top" src="https://www.rollingstone.com/wp-content/uploads/2020/12/RS-EndofYearLists_2020_MOVIES.jpg" />
                    <Card.Body className="card-body">
                        <Card.Title style={{ fontSize: "2rem" }}>Top 10 Films of 2020</Card.Title>
                        <Card.Text className="podcast-text">
                            Steven and John discuss their top 10 films of 2020.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h6 className="text-center"><a href='https://open.spotify.com/episode/57F8QBetc1z6fYKd6eRVkE?si=6fqKAdp7TmKWwQkFshkVqQ'>Listen On Spotify</a></h6>
                        <h6 className="text-center"><a href='https://podcasts.apple.com/us/podcast/backlots-top-10-films-of-2020/id1460214563?i=1000506784326'>Listen On Apple Podcasts</a></h6>
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