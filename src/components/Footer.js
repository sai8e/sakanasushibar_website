import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container" id="footer">
      <section className='footer-subscription'>
        {/* <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p> */}
        <p className='footer-subscription-text'>
          DINE-IN & PICK UP AVAILABLE
        </p>
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">

        <div class="footer-link-items">
            <h2>
              <i class="fa fa-map-marker-alt" /> Address
            </h2>
            <a href='https://www.google.com/maps/place/Sakana+Sushi+Bar/@40.6126003,-111.9841577,17z/data=!3m1!5s0x87528eef2a844837:0xcf3555f805df5d85!4m5!3m4!1s0x87528ee922a216f3:0x3c4b23165d1bb37c!8m2!3d40.6126003!4d-111.981969' class="address">
              7626 Campus View Drive Building G Suite 110 West Jordan, Utah
              84084
            </a>
          </div>

          <div class="footer-link-items">
            <h2>
              <i class="fas fa-clock" /> Hours
            </h2>
            <h3>Monday - Thursday</h3>
            <p>LUNCH 11:30 AM - 3:00 PM</p>
            <p>DINNER 5:00 PM - 9:00 PM</p>
            <h3>Friday</h3>
            <p>LUNCH 11:30 AM - 3:00 PM</p>
            <p>DINNER 5:00 PM - 9:30 PM</p>
            <h3>Saturday</h3>
            <p>OPEN 12 Noon - 9:30 PM</p>
            <h3>Sunday</h3>
            <p>Closed Sunday</p>
          </div>
          
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>
              <i class="fas fa-phone-alt" /> Phone
            </h2>
            <a href="tel:1-801-282-0670">(801) 282-0670</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          {/* <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div> */}
          <small class="website-rights">
            SAKANA SUSHI BAR & JAPANESE CUISINE © 2021
          </small>
          {/* <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-yelp' />
            </Link>
           
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Footer;
