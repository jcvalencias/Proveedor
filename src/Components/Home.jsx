import { useState, useEffect } from 'react';
import Header from './Header';
import '../Site/assets/css/style.css'
import "../Site/assets/css/default.css"
import "../Site/assets/css/bootstrap.min.css"
import "../Site/assets/fonts/themify-icons/themify-icons.css"
import "../Site/assets/css/magnific-popup.css"
import "../Site/assets/css/nice-select.css"
import "../Site/assets/css/jquery-ui.min.css"
import "../Site/assets/css/animate.css"


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
      <img src="/images/loader.png" alt="loader" />
    </div>
  </div>
  <Header />
</>

    );
}

export default Home;