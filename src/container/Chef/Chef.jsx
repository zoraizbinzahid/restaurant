import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img  app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>
    <div className='app__wrapper-info'>
      <SubHeading title="Chef's World" />
      <h1 className='headtext__cormorant'>What We Belive In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>
            People who love to eat are always the best people
          </p>
        </div>
        <p className='p__opensans'>
          If you really want to make a friend, go to someone's house and eat
          with him... the people who give you their food give you their heart.
        </p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
