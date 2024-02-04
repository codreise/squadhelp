import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import InfoSection from '../../components/HowItWorks/InfoSection/InfoSection';
import HowDoes from '../../components/HowItWorks/HowDoesSection/HowDoes';
import HowDoNamingContests from '../../components/HowItWorks/HowDoNamingContests/HowDoNamingContests';


const HowItWorks = () => {
    return (
        <>
        <Header />
        <main>
            <HowDoes />
            <InfoSection />
            <HowDoNamingContests />
        </main>
        <Footer />
        </>
    );
};

export default HowItWorks;