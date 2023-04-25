import React from 'react';
import '../CSS/Blogs.css';
import { Link } from 'react-router-dom';
import home from '../../images/home.jpeg';
import menh from '../../images/menh.jpg';
import mh from '../../images/mh.jpg';
import img12 from '../../images/img12.jpg';
import img13 from '../../images/img13.jpg';
import img14 from '../../images/img14.jpg';
import img15 from '../../images/img15.jpg';


export default function Blogs() {
  return (
    <>
      <h1 className='blog-title'>Blogs</h1>
      {/* <!-- Boxes Section --> */}
    <section className="boxes">
      <div className="box">
        {/* <i className="fa fa-pie-chart fa-4x" aria-hidden="true"></i> */}
        <i class="fa fa-life-ring fa-4x" aria-hidden="true"></i>
        <h3>Life</h3>
        <p>
        Mental health is important at every stage of life, from childhood and adolescence through adulthood.
        </p>
      </div>

      <div className="box">
        <i className="fa fa-globe fa-4x" aria-hidden="true"></i>
        <h3>Learning</h3>
        <p>
        Learning has been shown in the research to help improve and maintain our well-being.
        </p>
      </div>

      <div className="box">
        {/* <i className="fa fa-cog fa-4x" aria-hidden="true"></i> */}
        <i class="fa fa-share fa-4x" aria-hidden="true"></i>
        <h3>Sharing</h3>
        <p>
        Sharing experiences can be a cathartic and powerful way to help improve mental health.
        </p>
      </div>

      <div className="box">
        <i className="fa fa-users fa-4x" aria-hidden="true"></i>
        <h3>Support</h3>
        <p>
        Mental health and psychosocial support (MHPSS) includes any support that people receive to protect or promote their mental health and psychosocial wellbeing.
        </p>
      </div>
    </section>

    {/* <!--  --> */}
    <h2 className="blog-life">life</h2>
    {/* <!-- info section --> */}
    <section className="info">
      <div className="inform">
        <img src={menh} alt='img7'/>

        <Link  className='blog-link' 
          to='https://miss-mental.com/100-life-goals-free-goal-planner/'
          target="_blank">
            <h2>100 LIFE GOALS(WITH FREE GOAL PLANNER)</h2></Link>
        <p>
          Do you want a motivating list of goals, that consists of things you
          know you can actually achieve in the near future? Well, in this post
          I've rounded up 100 life goals which are a...
        </p>
        <button>
        <Link  
          to='https://miss-mental.com/100-life-goals-free-goal-planner/'
          className="blog-btn" target="_blank">
          Learn More </Link></button>
      </div>


      <div className="inform">
        <img src={mh} alt='img8'/>
        <Link  className='blog-link' 
          to='https://www.goodbyeselfhelp.com/things-to-do-when-bored-at-night/'
          target="_blank">
            <h2>21 Things to Do when Bored at Night</h2></Link>
        <p>
          If you're like me and struggle with insomnia, it can be super
          frustrating trying to think of things to do when bored at night. No
          one wants to be lying in bed doing nothing for...
        </p>
        <button>
        <Link  
          to='https://www.goodbyeselfhelp.com/things-to-do-when-bored-at-night/'
          className="blog-btn" target="_blank">
          Learn More </Link></button>
      </div>

      <div className="inform">
        <img src={img14} alt='img6'/>
        <Link className='blog-link'  
          to='https://anxiouslass.com/managing-mental-health-at-christmas/' target="_blank">
            <h2>5 QUICK TIPS FOR MANAGING MENTAL HEALTH AT CHRISTMAS</h2></Link>
        <p>
          Managing mental health at Christmas can be tough. It's such a busy
          time of year. There's LOTS of socialising, drinking, eating and
          pressure to spend money. While it is a magical time for many, it...
        </p>
        <button>
        <Link  
          to='https://anxiouslass.com/managing-mental-health-at-christmas/'
          className="blog-btn" target="_blank">
          Learn More </Link></button>
      </div>

      <div className="inform">
        <img src={img13} alt='img7'/>
        <Link  className='blog-link' 
          to='https://anxiouslass.com/lying-because-of-social-anxiety/' target="_blank">
            <h2>LYING BECAUSE OF SOCIAL ANXIETY</h2></Link>
        <p>
          I spent years lying because of social anxiety. Not in a malicious way
          or in a way to hurt and deceive people but because of the way that
          social anxiety had deceived me. The truth...
        </p>
        <button>
        <Link  
          to='https://anxiouslass.com/lying-because-of-social-anxiety/'
          className="blog-btn" target="_blank">
          Learn More </Link></button>
      </div>

      <div className="inform">
        <img src={img12} alt='img8'/>
        <Link  className='blog-link' 
          to='https://anxiouslass.com/50-self-harm-alternatives/' target="_blank">
            <h2>50 SELF HARM ALTERNATIVES THAT WON'T MAKE THINGS WORSE</h2></Link>
        <p>
          Not all self harm alternatives are made equally. Often when you search
          for self harm alternatives or you're given advice to try something
          different from self harm, you are told to hold an ice cube...
        </p>
        <button>
        <Link  
          to='https://anxiouslass.com/50-self-harm-alternatives/'
          className="blog-btn" target="_blank">
          Learn More </Link></button>
      </div>

      <div className="inform">
        <img src={img15} alt='img5'/>
        <Link  className='blog-link' 
          to='https://www.mentalhealth.org.uk/explore-mental-health/publications/how-look-after-your-mental-health' target="_blank">
            <h2>How to look after your mental health</h2></Link>
        <p>
          Talk about your feelings. Talking about your feelings can help you
          stay in good mental health and deal with times when you feel
          troubled....
        </p>
        <button>
        <Link  
          to='https://www.mentalhealth.org.uk/explore-mental-health/publications/how-look-after-your-mental-health'
          className="blog-btn" target="_blank">
          Learn More </Link></button>
      </div>
    </section>

    <div className="back-icon">
      {/* <a href="#"
        ><i className="fa fa-chevron-left fa-4x" aria-hidden="true"></i
        ><i className="fa fa-chevron-left fa-4x" aria-hidden="true"
          ><strong style="font-size: 1.6rem">OlDER POSTS</strong>
        </i></a
      > */}
    </div>
    </>
  );
}