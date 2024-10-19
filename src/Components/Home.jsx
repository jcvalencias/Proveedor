import { useState, useEffect } from 'react';
import UsuarioForm from './Admin/Admin';
import { Link } from 'react-router-dom';
import Header from './Structure/Header';
import PreLoader from './Structure/Preloader';
import Footer from './Structure/Footer';
import ListadoMapa from './Search/listado-con-mapa';
import HeroSection from './Home/HeroSection';
import CategorySection from './Home/CategorySection';
import GeneralSolutionSection from './Home/GeneralSolutionSection';
import PromotionalSection from './Home/PromotionalSection';
import FeaturesSection from './Home/FeaturesSection';
import CarouselSection from './Home/CarouselSection';
import DownloadSection from './Home/DownloadSection';
import NearbySection from './Home/NearbySection';
import ExploreSection from './Home/ExploreSection';
import NewsletterSection from './Home/NewsletterSection';
import ClientLogoSection from './Home/ClientLogoSection';
import BlogSection from './Home/BlogSection';

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a network request or any loading logic
        const timer = setTimeout(() => {
            setIsLoading(false); // Set loading to false when the content is ready
        }, 1000);

        return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }, []);

  const Body = () => {
    return (
      <>
      <HeroSection />
      <CategorySection />
      <GeneralSolutionSection />
      <PromotionalSection />
      <FeaturesSection />
      <CarouselSection />
      <DownloadSection />
      <NearbySection />
      <ExploreSection />
      <NewsletterSection />
      <ClientLogoSection />
      <BlogSection />
          </>
    )
  }

  return (
  <>
  {isLoading ? (
                <PreLoader /> // Show the preloader if isLoading is true
            ) : (
  <>
  <Header/>
 
  <Body />
  
  <Footer/>
  
  <a href="#" className="back-to-top">
    <i className="ti-angle-up" />
  </a>
  </>
  )}
  </>

  );
}

export default Home;