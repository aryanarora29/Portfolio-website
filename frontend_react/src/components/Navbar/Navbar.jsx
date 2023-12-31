import React, { useState } from 'react';
import { HiMenuAlt4 , HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';


import { images } from '../../constants'
import './Navbar.scss';

const Navbar = () => {
  const [ toggle , setToggle ] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      {/* unordered list loop through all the element taht we are going to have in nav bar */}
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills' , 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            {/* app__flex is use to center the text */}
            <div />
            <a href={` #${item} `}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
      
          {
          toggle && (
            <motion.div
              whileInView = { {  x: [300, 0] } }
              transition={{  duration: 0.85, ease: 'easeOut' }}

             >
              <HiX onClick={() => setToggle(false)  } />

                     <ul >
                        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li key={item}>
                      {/* app__flex is use to center the text */}
                      
                      <a href={` #${item} `} onClick={()  => setToggle(false)}>{item}</a>
                    </li>
                  ))}
                      </ul>

              {/* </HiX>    */}
            </motion.div>
          )

          }
      </div>

    </nav>
  )
}

export default Navbar
