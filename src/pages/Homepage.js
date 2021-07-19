import React from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import MainCarousel from '../components/MainCarousel.js'
import ImageBlock from '../components/ImageBlock.js';
import BackgroundImage from '../components/BackgroundImage.js';
import { faGlobeEurope, faShip, faUser } from '@fortawesome/free-solid-svg-icons'

function Homepage() {
  return (
    <div>
      <Header/>
      <MainCarousel/>
      <div className="container">
                <ImageBlock
                    imgSrc={faShip}
                    title="Luxuries Yacht"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.Necessitatibus ipsa, ad ratione quos distinctio unde.Lorem ipsum dolor sit amet, consectetur adipsisicing elit.Necessitatibus ipsa, ad ratione quos distinctio unde."
                />
                <ImageBlock
                    imgSrc={faGlobeEurope}
                    title="30 Years of Experiance"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Necessitatibus ipsa, ad ratione quos distinctio unde.Lorem ipsum dolor sit amet, consectetur adioisicing eliut.Necessitatiubus ipsa, ad ratione quos distinctio unde."
                />
                <ImageBlock
                    imgSrc={faUser}
                    title="Good Captain"
                    description="Lorem ipsum dolor ist amet, consectetur adipisicing elit.Necessitatibus ipsa, ad ratione quos distinctio unde.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Necessitatibus ipsa, ad ratione quos distinctio unde."
                />
      </div>
      <BackgroundImage/>        
      <Footer/>
    </div>
  );
}

export default Homepage;
