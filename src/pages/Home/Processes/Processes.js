import React from 'react';
import ProcessCard from './ProcessCard';

const Processes = () => {

    const processData = [
        {
            id: 1,
            title: "Find your new or second-hand bike",
            contact: "+88010002000",
            description: 'Search bikes near you, by height or any bike attribute. Any question? Ask it via the yellow button!',
        },
        {
            id: 2,
            title: "Make an appointment with the seller",
            contact: "+88010002000",
            description: 'Pay a deposit to reserve the bike & meet up for a testdrive. Or if you want, get it delivered straight away.',
        },
        {
            id: 3,
            title: "Click to confirm",
            contact: "+88010002000",
            description: 'Happy with the bike? Then confirm to pay the seller. If not, you cancel and the deposit is refunded entirely.At any point before confirming, you can switch to another bike.',
        }
    ]
    return (
        <div className='my-16'>
            <h2 className='text-3xl font-bold text-center'>Processes</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {
                    processData.map(process => <ProcessCard key={process.id} process={process} />)
                }
            </div>

        </div>
    );
};

export default Processes;