import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import '../CSS/Home.css';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
// import img22 from "../../images/img22.jpg";
import AllCollapseExample from '../Accordion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../CSS/Whatsapp.css'
import TypeWriter from 'typewriter-effect';
import mh from '../../images/mh.jpg';
import therapy1 from '../../images/therapy1.jpg';
import therapy2 from '../../images/therapy2.jpg';
import therapy3 from '../../images/therapy3.jpg';
import therapy4 from '../../images/therapy4.jpg';
import therapy5 from '../../images/therapy5.jpg';
import chela from '../../images/chela.jpg';


// import '../../App.css';

function Home() {
  const [state] = useState({
    title: "Hi👋,",
    titleTwo: "Welcome And Find The Best Psychologist For Yourself",
    titleThree: "We Offer ServicesLike:",
    // image: "/images/mh.png",
  });
  return (
    <>
      <div class="float-whatsapp" title="Whatsapp">
        {/* <link to='https://wa.me/+254758484550' target="_blank">
        <WhatsAppIcon />
        </link> */}
       <a href='https://wa.me/+254758484550' target="_blank">
        <WhatsAppIcon />
       </a>
      </div>

      <div className="home">
        <div className="home-intro">
          <h2>
            <div className="title">{state.title}</div>
            <div className="titleTwo">{state.titleTwo}</div>
            <div className="titleThree">{state.titleThree}</div>
          </h2>
          <div className="text">
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Self Assessment.",
                  "General Health.",
                  "Family Therapy.",
                  "Child Therapy.",
                  "Medication management.",
                  "Couple Counselling.",
                ],
              }}
            />
          </div>
          <div className="contact-me">
            <Link to='Contact'>
            <button className="home-button">Contact Me</button>
            </Link>
          </div>
        </div>
        <div className="typed-image">
            {/* <img className="mh-image" src={state.image} alt=''/> */}
            {/* <img className="mh-image"  src={mh} alt='hallo'/> */}
            <img className='mh-image' src={mh} alt='home'/>
        </div>
        {/* <img className="mh-image"  src={mh} alt='hallo'/> */}
      </div>
    
{/* second body */}
<section>
      <div class="container ">
                <h2 class="text-center text-black">Our Psychologist</h2>
                <p class="lead text-center text-black mb-5">Our Psychologist all have 5+ years working experience as
                    counsellors</p>
               
        <CardGroup>
          <Card className="h-auto">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            {/* <img src={img22} alt="flower" /> */}
            <img className='body-image' src={therapy1} alt="flower" />
            <Card.Body >
            
              <Card.Title className='card-title'> Pius</Card.Title>
              <Card.Text>
                He is the best counsellor and have alot of expreince on issues concerning mental health.
                Currently working at Rongo University at the department of guidance & counselling.
              </Card.Text>
              <Link className="about-social-links" to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=chelangatemmaculat2744@gmail.com' target="_blank">
            <i class="fa-solid fa-envelope fa-3x"></i
            >
            </Link>
            </Card.Body>
          </Card>

          <Card className="h-auto">
            <img className='body-image' src={chela} alt="flower" />
            <Card.Body>
              <Card.Title>Chelangat</Card.Title>
              <Card.Text>
                She is one of the best experts in Kenya who help people with mental challenges to overcome them.
                Currently working as a therapist at Mathare Hospital.
              </Card.Text>
              <Link className="about-social-links" to='https://www.instagram.com/p/CpzJ809Ipz4/?igshid=YzgwOTU0MGQ=' target="_blank">
              <i class="fab fa-instagram fa-3x"></i>
            
            </Link>
            </Card.Body>
          </Card>

          <Card className="h-auto">
            <img className='body-image' src={therapy2} alt="flower" />
            <Card.Body>
              <Card.Title>Edwin</Card.Title>
              <Card.Text>
                He is the head of guidance and counselling in Migori county.
                He has worked in several institution and have a great experience in mental illness.
              </Card.Text>
              <Link className="about-social-links" to='https://github.com/EmmaculatChelangat/EmmaculatChelangat.git' target="_blank">
            <i class="fab fa-github fa-3x"></i>
            </Link>
            </Card.Body>
          </Card>
        </CardGroup>
              <hr />
        <CardGroup>
          <Card className="h-auto">
            <img className='body-image' src={therapy3} alt="flower" />
            <Card.Body>
              <Card.Title>Faith</Card.Title>
              <Card.Text>
                She is a doctor by proffesion. She is a kenyan who is passionate in helping individual
                who faces problem when it comes to medication managemnt.
              </Card.Text>
              <Link className="about-social-links" to='https://www.linkedin.com/in/emmaculat-chelangat-57696a230?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvuSKlLITQfGX3QvOju759Q%3D%3D' target="_blank">
            <i class="fab fa-linkedin-in fa-3x"></i>
            </Link>
            </Card.Body>
            
          </Card>

          <Card className="h-auto">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <img className='body-image' src={therapy4} alt="flower" />
            <Card.Body>
              <Card.Title>Daniel</Card.Title>
              <Card.Text>
                He is a father, husband and church leader. He is passionate in helping people to solve their 
                family issue or couple counselling.
              </Card.Text>
              <Link className="about-social-links" to='https://twitter.com/chelaathecoder/status/1531721118737997824?t=7RtVofOdj1-rGsEe41NHew&s=19' target="_blank">
            <i class="fab fa-twitter fa-3x"></i>
            </Link>
            </Card.Body>
          </Card>

          <Card className="h-auto">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <img className='body-image' src={therapy5} alt="flower" />
            <Card.Body>
              <Card.Title>Edna</Card.Title>
              <Card.Text>
                She is a teacher, shw works in the department of guidance &
                counselling in the one of the famous high school. She deals mainly with child therapy.
                 
              </Card.Text>
              <Link className="about-social-links" to='https://www.facebook.com/chelangat.emmaculat' target="_blank">
           <i class="fab fa-facebook fa-3x"></i
            >
           </Link>
            </Card.Body>
            
          </Card>
        </CardGroup>
        </div>
      </section>

      {/* third section */}
      {/* <!-- Boxes Section --> */}
        <section class="boxes">
            <div class="box">
              <a href='/Pages/Booking.js' ><i class="fa fa-check fa-4x" aria-hidden="true"></i></a>
                <h3>Find vetted Psychologist</h3>
                <p>Quality is our priority. We vet Psychologist so you only work with the best.</p>
            </div>

            <div class="box">
                <a href='/Pages/Booking.js' ><i class="fa fa-globe fa-4x" aria-hidden="true"></i></a>
                <h3>Check availability</h3>
                <p>Filter for Psychologists who are accepting new clients at times that work for you.</p>
            </div>

            <div class="box">
            <a href='/Pages/Booking.js' ><i class="fa fa-phone fa-4x" aria-hidden="true"></i></a>
                <h3>Book free initial calls</h3>
                <p>Select a time for your Psychologist to call you and schedule an in-person appointment.</p>
                
            </div>

        </section>
        


        {/* accordion */}
        {/* <!-- Frequently asked Question   --> */}
        <AllCollapseExample />

    
    </>
  );
}

export default  Home;