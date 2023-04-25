import React , { useState } from 'react'
import emailjs from "emailjs-com";
import '../CSS/Contact.css';


function Policy() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // send email using emailjs
    emailjs.sendForm("service_eawiqvf", "template_od2zlvl", e.target, "iTF9pY2t3P49JietR")
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      }, (error) => {
        console.log('FAILED...', error);
        setSuccess(false);
      });
  };
  return (
    <>
   {/* <h1>Policy</h1>  */}
   <section className="home-contact" id="contact">

    <h1 className="contact-head">contact us</h1>

    <div className="row">

        {/* <!-- <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1632137920043!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe> --> */}
        {/*  <!-- <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=kitere,%20Rongo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://putlocker-is.org">putlocker</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">using google map on website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div> --> */}
        <iframe className="map" src="https://maps.google.com/maps?q=Rongo,%20RongoUniversity&t=&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen="" loading="lazy" title="map"></iframe> 
        
        <div className="contact-container">
      <h1>Get in touch with us!</h1>
      {success && <div className="success-message">Message sent successfully!</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>

    </div>

</section>
   </>
  )
}

export default Policy
