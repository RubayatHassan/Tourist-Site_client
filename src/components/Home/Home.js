import React from 'react';
import Register from '../Login/Register/Register';
import Services from '../Services/Services';
import Banner from './Banner';


const Home = () => {
    return (
        <>
        <h1 className='text-center display-2'><strong>The Turist Guider</strong></h1>
            <Banner></Banner>
            <Services></Services>
            <Register></Register>
            
        </>
    );
};

export default Home;