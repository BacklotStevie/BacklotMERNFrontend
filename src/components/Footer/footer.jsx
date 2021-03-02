import React from 'react';
import { Link } from 'react-router-dom'
import './footer.css'


const BottomNav = () => {
    return (
       
<footer className={(window.innerWidth >= 770 ? "mx-5 mt-5 " : " ") + "bg-dark text-center text-white mt-5"}>
  
  <div className="container p-4">
    
    <section className="mb-4">
    
      {/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-facebook-f"></i></a> */}

  
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-twitter"></i></a>

    
      {/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-google"></i></a> */}

     
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-instagram"></i></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-linkedin"></i></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fa fa-github"></i></a>
    </section>
   
    <section className="mb-4">
      <p>
      Inside the Backlot is a community. A place for cinephiles and filmmakers to connect and interact with one another. Our goal here at the Backlot is to expose the public to new films and up-and-coming filmmakers looking to leave their mark on the industry. For many, film is a hobby. For some, film is a passion. One thing is certain: film is art, and like any art, it’s a way to get your voice heard. Here are our voices.
      </p>
    </section>
    
    <section className="">
      <form action="">
        
        <div className="row d-flex justify-content-center">  
          <div className="col-md-5 col-12">
             <div className="form-outline form-white mb-4">
             <form classNameName="contact-form" method="post" action="https://formspree.io/f/xeqpbpgr">
                     <div classNameName="contact-firstname">
                           <label htmlFor="name"></label>
                       <input type="text" id="name" name="name" placeholder="Your name" required></input>
                      </div>

                      <div classNameName="contact-email">
                          <label htmlFor="email"></label>
                          <input type="text" id="email" name="email" placeholder="Your email" required></input>
                      </div>

                      <div classNameName="contact-subject">
                          <label htmlFor="subject"></label>
                          <textarea type="text" name="subject" placeholder="Your message" required></textarea>
                      </div>

                      <input classNameName="contact-submit bg-medium" type="submit" value="Submit"></input>
                  </form>
            </div>
          </div>
        
      
        </div>
      
      </form>
    </section>
   
    {/* <section className="">
     
      <div className="row">
      
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
     
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
      
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
      
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
        
      </div>
     
    </section> */}
   
  </div>


 
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a className="text-white" href="https:insidebacklot.com/"> Insidebacklot.com</a>
  </div>
 
</footer>
);
}

export default BottomNav;