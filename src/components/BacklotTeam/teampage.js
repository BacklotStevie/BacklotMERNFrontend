import React from 'react';
import { CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
// import AddReview from '../../components/AddReview/addreview'
import { Link } from 'react-router-dom'
import './teampage.css'
import John from '../../Images/john.jpg';
import Steven from '../../Images/steven.jpg';

const TeamPage = () => {

    return (
        <div className="container">
            <div className="row about-cards">
                <div className="col-12 col-sm-6 mb-5 about-card">
                    <CardDeck className="team">
                        <Card className='team-card'>
                            <Card.Img className='about-pics' width="100%" variant="top" src={Steven} />
                            <Card.Body className="">
                                <Card.Title className="text-center mb-3"><h3>Steven Sarria</h3><br /><h6><i>Co-Host, Editor, Founder</i></h6></Card.Title>
                                <Card.Text className="podcast-text">
                                    The founder of Inside the Backlot, the company started as passion project of Steven's. An aspiring filmmaker and film lover, Steven took an interest in the art form at an early age, and the passion has grown since. With a penchant for not shutting up, Inside the Backlot serves as an outlet for him - and others to come together and share discussion in something they love.
                                    </Card.Text>
                                <div className='socials-about'>
                                    <a href="https://twitter.com/sarria_steven?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" className="social-icons-team"></img></a>
                                    <a href="https://www.instagram.com/steven_sarriaa/"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" className="social-icons-insta"></img></a>
                                    <a href="https://www.youtube.com/channel/UCjzTSGj_1r7K-W3kzZGYIdw"><img src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png" className="social-icons-team"></img></a>
                                </div>
                            </Card.Body>
                            {/* <Card.Footer className='p-5 m-5'>
                                <h6 className="text-center"><a href='//linktr.ee/insidethebacklot/'>Listen Now</a></h6>
                            </Card.Footer> */}
                        </Card>
                    </CardDeck>
                </div>

                <div className="col-12 col-sm-6 mb-5 pb-5 about-card">
                    <CardDeck className="team">
                        <Card className='team-card'>
                            <Card.Img className='about-pics' width="100%" variant="top" src={John} />
                            <Card.Body className="">
                                <Card.Title className="text-center mb-3"><h3>John Kegley</h3><br /><h6><i>Co-Host</i></h6></Card.Title>
                                <Card.Text className="podcast-text">
                                    John rounds out the Backlot Review podcast as the show's co-host. With an extensive knowledge of comic books, pop culture, television and bad jokes, John is the Ying to Steven's Yang.
                                    </Card.Text>
                                <div className='socials-about mt-5'>
                                    <a href="https://twitter.com/john_keg?lang=en"><img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" className="social-icons-team"></img></a>
                                    <a href="https://www.instagram.com/john_keg/?hl=en"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" className="social-icons-insta"></img></a>
                                    <a href="https://www.youtube.com/channel/UCjzTSGj_1r7K-W3kzZGYIdw"><img src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png" className="social-icons-team"></img></a>
                                </div>
                            </Card.Body>
                            {/* <Card.Footer className='p-5 m-5'>
                                <h6 className="text-center"><a href='//linktr.ee/insidethebacklot/'>Listen Now</a></h6>
                            </Card.Footer> */}
                        </Card>
                    </CardDeck>

                </div>
            </div>
        </div>
    );
};

export default TeamPage;