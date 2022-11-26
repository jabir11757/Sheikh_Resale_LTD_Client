import React from 'react';

const ProcessCard = ({ process }) => {
    const { title, description } = process;
    return (
        <div className="card shadow-2xl">
            <div className="card-body bg-green-50 rounded-2xl">
                <h2 className="card-title">{title}</h2>
                <p className='mt-4'>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-success">Click me</button>
                </div>
            </div>
        </div>
    );
};

export default ProcessCard;