import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import {  FaWhatsapp , FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://wa.me/+919549693238"><FaWhatsapp /></a>
        {/* <a href = "https://twitter.com/i/flow/login"><BsTwitter></BsTwitter></a> */}
      </div>

      <div>
        <a href="https://www.instagram.com/a_r_.y._a_n/"><BsInstagram /></a>
      </div>

      <div>
        
        <a href="https://www.linkedin.com/in/aryan1229/"><FaLinkedin /></a>
      </div>

    </div>
  )
}

export default SocialMedia


// BsTwitter ,FaFacebook,