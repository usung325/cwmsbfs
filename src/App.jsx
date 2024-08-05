import React from 'react';
import InfiniteCanvas from './components/ImageComp';  // Adjust this import path as needed
import Scene from './components/Scene';

const MyApp = () => {
  const images = [
    {
      src: '/images/im3.png',
      link: 'http://anthonyalterio.com/portfolio_page/boi-doet/',
      x: 100,
      y: 200,
      width: 20,
      height: 15,
      alt: 'Description of image 1'
    },
    {
      src: '/images/im3.png',
      link: 'http://anthonyalterio.com/portfolio_page/feedbag/',
      x: 400,
      y: 300,
      width: 20,
      height: 15,
      alt: 'Description of image 2'
    },
    {
      src: '/images/im3.png',
      link: 'http://anthonyalterio.com/portfolio_page/poor-boys-drag/',
      x: 500,
      y: 600,
      width: 20,
      height: 15,
      alt: 'Description of image 1'
    },
    {
      src: '/images/im3.png',
      link: 'http://anthonyalterio.com/portfolio_page/throat-punch/',
      x: 800,
      y: 100,
      width: 20,
      height: 15,
      alt: 'Description of image 2'
    },
    // ... add more images as needed
  ];

  return (
    <>
      <InfiniteCanvas images={images} />
      <div className="absolute -z-10 top-0 ">
        <Scene />
      </div>
    </>
  );
};

export default MyApp;