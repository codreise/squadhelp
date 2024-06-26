import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ListOfServices from '../../components/HowItWorks/ListOfServices/ListOfServices';
import HowDoes from '../../components/HowItWorks/HowDoesSection/HowDoes';
import HowDoNamingContests from '../../components/HowItWorks/HowDoNamingContests/HowDoNamingContests';
import InformationSection from '../../components/HowItWorks/InformationSection/InformationSection';
import ContentSection from '../../components/HowItWorks/ContentSection/ContentSection';


const HowItWorks = () => {
    return (
        <>
        <Header />
        <main>
            <HowDoes />
            <ListOfServices />
            <HowDoNamingContests />
            <InformationSection />
            <ContentSection />
        </main>
        <Footer />
        </>
    );
};

export default HowItWorks;