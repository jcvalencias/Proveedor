import { useState, useEffect } from 'react';
import Header from './Header';

const Home = () => {

  const PreLoader = () => {
    return (
      <div className="preloader">
            <div className="loader">
                <img src="assets/images/loader.png" alt="loader" />
            </div>
        </div>
    );
  }

  return (
  <>
    {/*====== Start Preloader ======*/}
    <PreLoader />
    <Header />
  </>

  );
}

export default Home;