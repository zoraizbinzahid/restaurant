import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href='#home'>home</a>
        </li>
        <li className='p__opensans'>
          <a href='#about'>about</a>
        </li>
        <li className='p__opensans'>
          <a href='#menu'>menu</a>
        </li>
        <li className='p__opensans'>
          <a href='#awards'>awards</a>
        </li>
        <li className='p__opensans'>
          <a href='#contats'>contats</a>
        </li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>
          Log In / Register
        </a>
        <div />
        <a href='/' className='p__opensans'>
          Book Table
        </a>
      </div>
      <div className='app__navbar-smallscreen'>
        <FaHamburger
          color='#fff'
          fontSize={25}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overly flex__center slide-bottom'>
            <FaHamburger
              color='#fff'
              fontSize={25}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
            />
            <ul className='app__navbar-smallscreen-links'>
              <li className='p__opensans'>
                <a href='#home'>home</a>
              </li>
              <li className='p__opensans'>
                <a href='#about'>about</a>
              </li>
              <li className='p__opensans'>
                <a href='#menu'>menu</a>
              </li>
              <li className='p__opensans'>
                <a href='#awards'>awards</a>
              </li>
              <li className='p__opensans'>
                <a href='#contats'>contats</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
