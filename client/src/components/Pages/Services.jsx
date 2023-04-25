import React from 'react';
import { Link } from 'react-router-dom'
// import '../../App.css';
import '../CSS/Services.css';

export default function Services() {
  return(
    <>
    <h1 className="service-head">OUR SERVICES</h1>
    <div className="box-container">
      <div className="box">
        <div className="service-icon">
          <span className="fas fa-code fa-4x"></span>
        </div>
        <h3 className="title">Self Assesment</h3>
        <p>
          General health care settings represent an important resource for the
          mental health care in the community. There is ample evidence that
          emotional stress is often related to physical illness and that many
          physical disorders coexist with psychological disorders.
        </p>
        {/* <Link to='/Pages/Assesment.js'>Read More <i className="fas fa-angle-double-right"></i></Link> */}
        <Link to='/assesment'>Read More <i className="fas fa-angle-double-right"></i></Link>

        {/* <a href="#">read more <i className="fas fa-angle-double-right"></i></a> */}
      </div>

      <div className="box">
        <div className="service-icon">
          <span className="fas fa-tools fa-4x"></span>
        </div>
        <h3 className="title">Free Resources</h3>
        <p>
          We provide Mental Health related videos that you can watch and learn 
          from them. We also have books for mental health and other related blogs.
        </p>
        <Link to='/Pages/Free.js'>Read More <i className="fas fa-angle-double-right"></i></Link>
        {/* <a href="#">read more <i className="fas fa-angle-double-right"></i></a> */}
      </div>

      <div className="box">
        <div className="service-icon">
          <span className="fas fa-paint-brush fa-4x"></span>
        </div>
        <h3 className="title">Individual therapy</h3>
        <p>
          Image result for individual therapy mental health Individual
          counseling (sometimes called psychotherapy, talk therapy, or
          treatment) is a process through which clients work one-on-one with a
          trained mental health clinician in a safe, caring, and confidential
          environment..
        </p>
        <Link to='/Pages/Booking.js'>Read More <i className="fas fa-angle-double-right"></i></Link>
        {/* <a href="#">read more <i className="fas fa-angle-double-right"></i></a> */}
      </div>

      <div className="box">
        <div className="service-icon">
          <span className="fas fa-child fa-4x"></span>
        </div>
        <h3 className="title">Child therapy</h3>
        <p>
          Child and adolescent mental health problems account for a significant
          proportion of the local and global burden of disease and is recognized
          as a growing public health concern in need of adequate services.
        </p>
        <Link to='/chat'>Read More <i className="fas fa-angle-double-right"></i></Link>
        {/* <a href="#">read more <i className="fas fa-angle-double-right"></i></a> */}
      </div>

      <div className="box">
        <div className="service-icon">
          <span className="fas fa-bullhorn fa-4x"></span>
        </div>
        <h3 className="title">Family therapy</h3>
        <p>
        Family therapy is a type of treatment designed to help with issues
          that specifically affect families' mental health and functioning. It
          can help individual family members build stronger relationships,.
        </p>
        <Link to='/chat'>Read More <i className="fas fa-angle-double-right"></i></Link>
        {/* <a href="#">read more <i className="fas fa-angle-double-right"></i></a> */}
      </div>

      <div className="box">
        <div className="service-icon">
          <span className="fas fa-prescription fa-4x"></span>
        </div>
        <h3 className="title">medication management</h3>
        <p>
          Medication management services contribute to: Improved patient use and
          administration of all medications. Improved percentage of patients
          meeting their healthcare goals. Reduced side effects and duplication,
          as well as drug interactions, of all medications..
        </p>
        <Link to='/Pages/Booking.js'>Read More <i className="fas fa-angle-double-right"></i></Link>
        {/* <a href="#">read more <i className="fas fa-angle-double-right"></i></a> */}
      </div>
    </div>

    </>
  )
}