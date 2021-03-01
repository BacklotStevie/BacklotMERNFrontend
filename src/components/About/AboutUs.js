import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="jumbotron bg-medium">
                    <div className='col-12'>
                        <h1 className="text-black">About Us</h1>
                        <p className="lead text-black">Inside the Backlot is a community. A place for cinephiles and filmmakers to connect and interact with one another. Our goal here at the Backlot is to expose the public to new films and up-and-coming filmmakers looking to leave their mark on the industry. For many, film is a hobby. For some, film is a passion. One thing is certain: film is art, and like any art, it’s a way to get your voice heard. Here are our voices.
                        <br /><br />Welcome to Inside the Backlot.</p>
                    </div>
                    {/* <div className='col-12'>
                        <img className="logo-jumbo" src={Logo} />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;