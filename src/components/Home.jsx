import React from 'react';

import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt='banner_image'
      />
      <div className='home__row'>
        <Product
          id='12321341'
          title='RajasthaniKart® Comfort Rajasthani Jaipuri Traditional Sanganeri Print 144 TC 100% Cotton Single Bedsheet with 1 Pillow Covers'
          price={262.0}
          rating={5}
          image='https://images-eu.ssl-images-amazon.com/images/I/61cjm2JOKRL._SY300_SX300_QL70_FMwebp_.jpg'
        />
        <Product
          id='12321342'
          title='Youth Roller Skates for Women Men Graffiti Freestyle Quad Rink Skate Shoes'
          price={262.0}
          rating={5}
          image='https://m.media-amazon.com/images/I/517uu8TMFkL._SX425_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='12321343'
          title='Blastoise Telescopes for Kids Beginners Space Astronomic Telescope 70mm Portable Astronomical Telescope with Star Finder Tripod Mobile Phone Holder and Backpack Perfect for Kids/Children/Teens'
          price={262.0}
          rating={5}
          image='https://m.media-amazon.com/images/I/71RAZUYibzL._SY355_.jpg'
        />
        <Product
          id='12321344'
          title='KORE DM-HEXA-COMBO16 Dumbbells Kits'
          price={262.0}
          rating={5}
          image='https://m.media-amazon.com/images/I/71ruxm3zRaL._SY450_.jpg'
        />
        <Product
          id='12321345'
          title='Lifeline Fitness Multi Home Gym Multiple Muscle Workout Exercise Machine Chest Biceps Shoulder Back Triceps Legs for Men at Home, 72kg Weight Stack, Made in India'
          price={262.0}
          rating={5}
          image='https://m.media-amazon.com/images/I/31cv8vTznzL._SY450_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='12321346'
          title='Jaspo Dragon Fire Fiber Skateboard Combo (26.5 X 6.5) ( for Age Group 7 Years and Above)'
          price={262.0}
          rating={5}
          image='https://images-eu.ssl-images-amazon.com/images/I/419mCXLn3xL._SX300_SY300_QL70_FMwebp_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;
