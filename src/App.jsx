import React from 'react';
import InfiniteCanvas from './components/ImageComp';  // Adjust this import path as needed
import Scene from './components/Scene';

const MyApp = () => {
  const images = [
    {
      src: '/images/im3.png',
      link: 'https://x.com/tsots2501',
      x: 100,
      y: 200,
      width: 20,
      height: 15,
      alt: 'Description of image 1'
    },
    {
      src: '/images/im3.png',
      link: 'https://github.com/usung325',
      x: 400,
      y: 300,
      width: 20,
      height: 15,
      alt: 'Description of image 2'
    },
    {
      src: '/images/im3.png',
      link: 'https://x.com/tsots2501',
      x: 500,
      y: 600,
      width: 20,
      height: 15,
      alt: 'Description of image 1'
    },
    {
      src: '/images/im3.png',
      link: 'https://github.com/usung325',
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