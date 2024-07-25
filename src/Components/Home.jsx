import { useState, useEffect } from 'react';
import Header from './Header';


const Home = () => {
  const [fade, setfade] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setfade(' fade');
    }, 1000);
  });

  return (
<>
  {/*====== Start Preloader ======*/}
  <div className={"preloader" + fade}>
    <div className="loader">
      <img src="/assets/images/loader.png" alt="loader" />
    </div>
  </div>
  <Header />
</>

    );
}

export default Home;