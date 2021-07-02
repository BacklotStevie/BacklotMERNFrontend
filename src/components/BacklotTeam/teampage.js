import React from 'react';
import { Card } from 'react-bootstrap';
// import AddReview from '../../components/AddReview/addreview'
import './teampage.css'
import John from '../../Images/john.jpg';
import Steven from '../../Images/steven.jpg';

const TeamPage = () => {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <Card className='border-0'>
                        <Card.Img width="100%" variant="top" src={Steven} />
                        <Card.Body className="card-body">
                            <Card.Title className="text-center mb-2">
                                <h3 class="mb-3">Steven Sarria</h3>
                                <h6>
                                    <i>Founder, Co-Host</i>
                                </h6>
                            </Card.Title>
                            <Card.Text className="podcast-text">
                                The founder of Inside the Backlot, the company started as a passion project of Steven's. An aspiring filmmaker and film lover, Steven took an interest in the art form at an early age, and the passion has grown since. With a penchant for not shutting up, Inside the Backlot serves as an outlet for him - and others to come together and share discussion in something they love. When not recording the podcast, you can catch Steven convincing his friends to watch <i>Black Sails</i> or re-watching <i>Sherlock</i> for the 16th time. 
                            </Card.Text>
                            <div className='text-center mt-3'>
                                <a href="https://twitter.com/sarria_steven?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" className="social-icons-team"></img></a>
                                <a href="https://www.instagram.com/steven_sarriaa/"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" className="social-icons-insta"></img></a>
                                <a href="https://www.youtube.com/channel/UCjzTSGj_1r7K-W3kzZGYIdw"><img src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png" className="social-icons-team"></img></a>
                            </div>
                        </Card.Body>
                        {/* <Card.Footer className='p-5 m-5'>
                            <h6 className="text-center"><a href='//linktr.ee/insidethebacklot/'>Listen Now</a></h6>
                        </Card.Footer> */}
                    </Card>
                </div>
                
                <div className="col-md-6">
                    <Card className='border-0'>
                        <Card.Img width="100%" variant="top" src={JP} />
                        <Card.Body className="card-body">
                            <Card.Title className="text-center mb-2">
                                <h3 class="mb-3">JP Matias</h3>
                                <h6>
                                    <i>Co-Host</i>
                                </h6>
                            </Card.Title>
                            <Card.Text className="podcast-text">
                                Producer, podcast host, #1 fan. JP joined the Backlot team earlier this year, after being a frequent guest on the show. Rounding out the Backlot trio, his knowledge of music and film caps off the team, although his ability to reel in his other two co-hosts is quite possibly the best thing for our listeners. 
                            </Card.Text>
                            <div className='text-center mt-3'>
                                <a href="https://twitter.com/sarria_steven?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" className="social-icons-team"></img></a>
                                <a href="https://www.instagram.com/_paulymath/?hl=en"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" className="social-icons-insta"></img></a>
                                <a href="https://www.youtube.com/channel/UCjzTSGj_1r7K-W3kzZGYIdw"><img src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png" className="social-icons-team"></img></a>
                            </div>
                        </Card.Body>
                        {/* <Card.Footer className='p-5 m-5'>
                            <h6 className="text-center"><a href='//linktr.ee/insidethebacklot/'>Listen Now</a></h6>
                        </Card.Footer> */}
                    </Card>
                </div>

                <div className="col-md-6">
                    <Card className='border-0'>
                        <Card.Img width="100%" variant="top" src={John} />
                        <Card.Body className="card-body">
                            <Card.Title className="text-center mb-2">
                                <h3 class="mb-3">John Kegley</h3>
                                <h6>
                                    <i>Co-Host</i>
                                </h6>
                            </Card.Title>
                            <Card.Text className="podcast-text">
                                Meeting Steven during their college days, John became an integral part of Backlot almost right away. A lover of all things pop culture, John grew up surrounded by comic books, Star Wars and all things nerdy, and with an expansive knowledge in these subjects, John co-hosts the Inside the Backlot podcast alongside Steven, constantly interrupting and providing insight. When not being sad about <i>Game of Thrones</i>, you can catch John re-watcing <i>Karate Kid</i> and convincing Steven to watch <i>Cobra Kai</i>, or at his favorite AMC movie theater.
                                </Card.Text>
                            <div className='text-center mt-3'>
                                <a href="https://twitter.com/john_keg?lang=en"><img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" className="social-icons-team"></img></a>
                                <a href="https://www.instagram.com/john_keg/?hl=en"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" className="social-icons-insta"></img></a>
                                <a href="https://www.youtube.com/channel/UCjzTSGj_1r7K-W3kzZGYIdw"><img src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png" className="social-icons-team"></img></a>
                            </div>
                        </Card.Body>
                        {/* <Card.Footer className='p-5 m-5'>
                            <h6 className="text-center"><a href='//linktr.ee/insidethebacklot/'>Listen Now</a></h6>
                        </Card.Footer> */}
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;