import React from 'react';
import { NavLink } from 'react-router-dom';

const DigitalMarketing = () => {
  return (
    <div className="digital-marketing">
      <h1>Digital Marketing</h1>
      <p>At Gurkha Technology, we understand the importance of a strong online presence in today's digital age. That's why we offer a range of comprehensive digital marketing packages tailored to meet your business's unique needs.</p>
      <ul>
        {/* <li>
          <NavLink to="/fb-insta" className="p" >Facebook & Instagram</NavLink>
        </li> */}
        <li>
          <NavLink to="/dm/googleads" className="p">Google Ads</NavLink>
        </li>
        <li>
          <NavLink to="/dm/tiktok-vid" className="p">Tiktok Videos</NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default DigitalMarketing;
