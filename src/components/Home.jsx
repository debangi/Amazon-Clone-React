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
          title='100% Cotton Single Bedsheet with 1 Pillow Covers'
          price={262.0}
          rating={5}
          image='https://images-eu.ssl-images-amazon.com/images/I/61cjm2JOKRL._SY300_SX300_QL70_FMwebp_.jpg'
        />
        <Product
          id='12321342'
          title='Youth Roller Skates for Women Men'
          price={262.0}
          rating={5}
          image='https://m.media-amazon.com/images/I/517uu8TMFkL._SX425_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='12321343'
          title='Blastoise Telescopes for Kids '
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
          title='Muscle Workout Exercise Machine'
          price={262.0}
          rating={5}
          image='https://m.media-amazon.com/images/I/31cv8vTznzL._SY450_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='12321346'
          title='Jaspo Dragon Fire Fiber Skateboard Combo '
          price={262.0}
          rating={5}
          image='https://images-eu.ssl-images-amazon.com/images/I/419mCXLn3xL._SX300_SY300_QL70_FMwebp_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;
