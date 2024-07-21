import { useState } from 'react';
import '../Site/assets/css/style.css'
import "../Site/assets/css/default.css"
import "../Site/assets/css/bootstrap.min.css"
import "../Site/assets/fonts/themify-icons/themify-icons.css"
import "../Site/assets/css/magnific-popup.css"
import "../Site/assets/css/nice-select.css"
import "../Site/assets/css/jquery-ui.min.css"
import "../Site/assets/css/animate.css"


function Home() {
    return (
<>
  {/*====== Favicon Icon ======*/}
  <link rel="shortcut icon" href="../Site/assets/images/favicon.png" type="image/png" />
  {/*====== Start Preloader ======*/}
  <div className="preloader">
    <div className="loader">
      <img src="../Site/assets/images/loader.png" alt="loader" />
    </div>
  </div>

</>

    );
}

export default Home;