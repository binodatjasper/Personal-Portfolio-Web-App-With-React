import React from "react";

// import secttions
import Banner from './../components/Banner';
import Profile from './../components/Profile';
import Achivement from './../components/Achivement';
import Services from './../components/Services';
import Portfolios from './../components/Portfolios';
import Clients from './../components/Clients';
import Process from './../components/Process';
import Contact from './../components/Contact';

const HomePage = () => {
    return (
        <>
            <Banner />
            <Profile />
            <Achivement />
            <Services />
            <Portfolios />
            <Clients />
            <Process />
            <Contact />
        </>
    )
}

export default HomePage;