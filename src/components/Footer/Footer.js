import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 mb-0 bg-light'>
            <h4>Copyright @ {year} </h4>
        </footer>
    );
};

export default Footer;