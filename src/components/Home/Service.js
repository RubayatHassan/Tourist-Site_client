import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, img, price, body} = service;
    
    const navigate = useNavigate()
    const orderPage = () =>{
        const path = '/order'
        navigate(path)
    }
    return (
        <div className='service'>
            <img className='image' src={img} alt="" />
            <h2>The Tourist guide of: {name}</h2>
            <h3>Guide Cost: {price}</h3>
            <p>Discription: {body}</p>
            <button onClick={orderPage}>Book this service: {name}</button>
        </div>
    );
};

export default Service;