import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../WorksSection/HowItWorks';
import Brands from '../Brands/Brands';
import ZapShiftHero from '../HeroShift/zapShiftHero';
import ServiceHighlights from '../Service/servicesHightLights';


const Home = () => {
    return (
        <div>
            
       <Banner></Banner>
       <Brands></Brands>
       <HowItWorks></HowItWorks>
       <ServiceHighlights></ServiceHighlights>
       <ZapShiftHero></ZapShiftHero>
       

        </div>
    );
};

export default Home;