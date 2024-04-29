import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import InfoSection from '../../components/HowItWorks/InfoSection/InfoSection';
import HowDoes from '../../components/HowItWorks/HowDoesSection/HowDoes';
import HowDoNamingContests from '../../components/HowItWorks/HowDoNamingContests/HowDoNamingContests';
import InformationSection from '../../components/HowItWorks/InformationSection/InformationSection';


const HowItWorks = () => {
    return (
        <>
        <Header />
        <main>
            <HowDoes />
            <InfoSection />
            <HowDoNamingContests />
            <InformationSection/>
        </main>
        <Footer />
        </>
    );
};

export default HowItWorks;