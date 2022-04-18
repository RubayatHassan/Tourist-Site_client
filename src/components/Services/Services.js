import React, { useEffect, useState } from 'react';
import Service from '../Home/Service';
import './Services.css'


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch("review.json")
        .then(res =>res.json())
        .then(data => setServices(data));
    }, []

    )
    return (
        <div id='services'>
            <h1 className='services-title display-3 mt-5 mb-5'>My Services</h1>

            <div className='services-container'>
            {
                services.map( service => <Service key={service.id} service={service}></Service> )
            }
            </div>
            
        </div>
    );
};

export default Services;