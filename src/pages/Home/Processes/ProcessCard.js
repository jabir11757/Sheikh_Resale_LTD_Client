import React from 'react';

const ProcessCard = ({ process }) => {
    const { title, description } = process;
    return (
        <div className="card shadow-2xl">
            <div className="card-body bg-gray-50 rounded-2xl">
                <h2 className="card-title">{title}</h2>
                <p className='mt-4'>{description}</p>
                <div className="card-actions justify-end">
                    <button className="h-10 w-20 bg-gray-600 hover:bg-gray-500 text-white rounded-lg">Preview</button>
                </div>
            </div>
        </div>
    );
};

export default ProcessCard;