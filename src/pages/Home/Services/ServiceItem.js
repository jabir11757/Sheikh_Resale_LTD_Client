import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ service }) => {
    const { name, picture, _id } = service;
    return (
        <div className="card ">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions">
                    <button className="btn btn-success"><Link to={`products/${_id}`}>details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;