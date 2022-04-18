import React from 'react';
import Register from '../Login/Register/Register';
import Services from '../Services/Services';
import Banner from './Banner';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Register></Register>
        </>
    );
};

export default Home;