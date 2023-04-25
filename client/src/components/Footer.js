import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './CSS/Footer.css'

const Footer = () =>{
    return(
        <>
        <footer>
            <div  className="container container-flex">
                <div className="footer-icons" >
                    <a href="https://twitter.com/chelaathecoder/status/1531721118737997824?t=7RtVofOdj1-rGsEe41NHew&s=19" target="_blank"><TwitterIcon className="icon"/></a>  
                    <a href="https://wa.me/+254758484550" target="_blank"><WhatsAppIcon className="icon"/></a>
                    <a href="https://github.com/EmmaculatChelangat/EmmaculatChelangat.git" target="_blank"><GitHubIcon className="icon"/></a>
                    <a href="https://www.instagram.com/p/CpzJ809Ipz4/?igshid=YzgwOTU0MGQ=" target="_blank"><InstagramIcon className="icon"/></a>
                    <a href="https://www.linkedin.com/in/emmaculat-chelangat-57696a230?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvuSKlLITQfGX3QvOju759Q%3D%3D" target="_blank"><LinkedInIcon className="icon"/></a>
                </div>
                <div className="line">
                    <hr />
                    <hr />
                </div>
                <div className="copyright">
                    <p>All rights reserved &copy;</p>
                    <p>Made with Love by Chelaa</p>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer;