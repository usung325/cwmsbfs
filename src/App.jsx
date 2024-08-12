// import { Analytics } from "@vercel/analytics/react"
// import React from 'react';
// import InfiniteCanvas from './components/ImageComp';  // Adjust this import path as needed
// import Scene from './components/Scene';
// import Scene2 from './components/Scene2';
// import TextPage from "./pages/TextPage";

// const MyApp = () => {
// const images = [
//   {
//     src: '/images/im3.png',
//     link: 'http://anthonyalterio.com/portfolio_page/boi-doet/',
//     x: 100,
//     y: 200,
//     width: 20,
//     height: 15,
//     alt: 'Description of image 1',
//     description: 'Pittsburgh PA'
//   },
//   {
//     src: '/images/im3.png',
//     link: 'http://anthonyalterio.com/portfolio_page/feedbag/',
//     x: 400,
//     y: 300,
//     width: 20,
//     height: 15,
//     alt: 'Description of image 2',
//     description: 'New York NY'
//   },
//   {
//     src: '/images/im3.png',
//     link: 'http://anthonyalterio.com/portfolio_page/poor-boys-drag/',
//     x: 500,
//     y: 600,
//     width: 20,
//     height: 15,
//     alt: 'Description of image 1',
//     description: 'Chicago IL'
//   },
//   {
//     src: '/images/im3.png',
//     link: 'http://anthonyalterio.com/portfolio_page/throat-punch/',
//     x: 800,
//     y: 100,
//     width: 20,
//     height: 15,
//     alt: 'Description of image 2',
//     description: 'San Francisco CA'
//   },
//   // ... add more images as needed
// ];

//   return (
//     <>
//       {/* <Scene2 /> */}
//       <div className="w-full">
//         <p className="text-black text-sm mx-auto text-center pt-5">Conversations With My Straight Boyfriends</p>
//       </div>


//       {/* <TextPage /> */}

//       <InfiniteCanvas images={images} />
//       <div className="absolute -z-10 top-0 ">
//         <Scene />
//         {/* <Scene2 /> */}
//       </div>
//       <Analytics />
//     </>
//   );
// };

// export default MyApp;


import { Analytics } from "@vercel/analytics/react"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InfiniteCanvas from './components/ImageComp';
import Scene from './components/Scene';
import Scene2 from './components/Scene2';
import TextPage from "./pages/TextPage";

const MyApp = () => {
  const images = [
    {
      src: '/images/im3.png',
      link: '/text/Pittsburgh',
      x: 100,
      y: 200,
      width: 20,
      height: 15,
      alt: 'Description of image 1',
      description: 'Pittsburgh PA'
    },
    {
      src: '/images/im3.png',
      link: '/text/NewYork',
      x: 400,
      y: 300,
      width: 20,
      height: 15,
      alt: 'Description of image 2',
      description: 'New York NY'
    },
    {
      src: '/images/im3.png',
      link: '/text/LA',
      x: 300,
      y: 600,
      width: 20,
      height: 15,
      alt: 'Description of image 1',
      description: 'Los Angeles CA'
    },
    {
      src: '/images/im3.png',
      link: '/text/Chicago',
      x: 800,
      y: 300,
      width: 20,
      height: 15,
      alt: 'Description of image 2',
      description: 'Chicago IL'
    },
    {
      src: '/images/im3.png',
      link: '/text/Sydney',
      x: -100,
      y: -200,
      width: 20,
      height: 15,
      alt: 'Description of image 1',
      description: 'Sydney'
    },
    {
      src: '/images/im3.png',
      link: '/text/Providence',
      x: -400,
      y: 300,
      width: 20,
      height: 15,
      alt: 'Description of image 2',
      description: 'Providence RD'
    },
    {
      src: '/images/im3.png',
      link: '/text/Suwanee',
      x: 700,
      y: -250,
      width: 20,
      height: 15,
      alt: 'Description of image 2',
      description: 'Suwanee GA'
    },
    // ... other images
  ];

  return (
    <Router>


      <Routes>
        <Route path="/" element={
          <>
            <div className="w-full">
              <p className="text-black text-sm mx-auto text-center pt-5">Conversations With My Straight Boyfriends</p>
            </div>
            <InfiniteCanvas images={images} />
            <div className="absolute -z-10 top-0">
              <Scene />
            </div>
          </>
        } />
        <Route path="/text/:city" element={
          <>
            <TextPage />
            <div className="absolute -z-10 top-0">
              <Scene2 />
            </div>
          </>
        } />
      </Routes>

      <Analytics />
    </Router>
  );
};

export default MyApp;