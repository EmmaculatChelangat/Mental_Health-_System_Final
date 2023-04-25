import React from 'react';
import about from '../../images/about.jpg';
import '../CSS/AboutMh.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      {/* <h1 className='consulting'>About Us</h1> */}
      <div class="section-about">
      <div class="container-about">
        <div class="content-section">
          <div>
            <div class="title">
              <h1>About Us</h1>
            </div>
            <div class="content">
              {/* <!-- <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3> --> */}
              <p>
                OpenMyMind facilitate pathways to face-to-face services as well
                as online care [24,26], allowing young people who need intensive
                services to readily access them while also supporting the large
                number of young people with mild or moderate mental health
                concerns
              </p>
            </div>
          </div>

          <div class="title">
            <h1>Mission</h1>
          </div>
          <div class="content">
            {/* <!-- <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3> --> */}
            <p>
              Our mission is to promote universal and equitable access to the
              highest quality care for all people affected by mental disorders,
              including substance use disorders;.
            </p>
          </div>

          <div class="title">
            <h1>Vision</h1>
          </div>
          <div class="content">
            {/* <!-- <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3> --> */}
            <p>
              Our aim is to be the premier psychiatric organization that
              advances mental health as part of general health and well-being..
            </p>
          </div>

          <div className="about-social-links">
            <Link className="about-social-links" to='https://github.com/EmmaculatChelangat/EmmaculatChelangat.git' target="_blank">
            <i class="fab fa-github fa-2x"></i>
            </Link>
            
            <Link className="about-social-links" to='https://www.linkedin.com/in/emmaculat-chelangat-57696a230?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvuSKlLITQfGX3QvOju759Q%3D%3D' target="_blank">
            <i class="fab fa-linkedin-in fa-2x"></i>
            </Link>
            
            <Link className="about-social-links" to='https://twitter.com/chelaathecoder/status/1531721118737997824?t=7RtVofOdj1-rGsEe41NHew&s=19' target="_blank">
            <i class="fab fa-twitter fa-2x"></i>
            </Link>
            
            <Link className="about-social-links" to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=chelangatemmaculat2744@gmail.com' target="_blank">
            <i class="fa-solid fa-envelope fa-2x"></i
            >
            </Link>
           
           <Link className="about-social-links" to='https://www.facebook.com/chelangat.emmaculat' target="_blank">
           <i class="fab fa-facebook fa-2x"></i
            >
           </Link>
           
          </div>
        </div>
        <div class="image-section">
          {/* <img src="/assets/images/about.jpg" /> */}
          <img src={about} alt="about" />
        </div>
      </div>
    </div>
    </>
  );
}
export default About;