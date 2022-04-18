import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, price, body} = service;
    return (
        <div className='service'>
            <img className='image' src={img} alt="" />
            <h2>The Tourist guide of: {name}</h2>
            <h3>Guide Cost: {price}</h3>
            <p>Discription: {body}</p>
            <button>Book this service: {name}</button>
        </div>
    );
};

export default Service;