import React from 'react';
import kpr from '../../../images/kpr-red.jpg'
import yamaha from '../../../images/yamaha-155.jpg'
import tvs from '../../../images/tvs-67.jpg'
import SliderItem from './SliderItem';

const Slider = () => {
    const sliderData = [
        {
            image: kpr,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: yamaha,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: tvs,
            prev: 2,
            id: 3,
            next: 1
        }

    ]
    return (
        <div className="carousel py-5">
            {
                sliderData.map(slide => <SliderItem key={slide.id} slide={slide} />)
            }
        </div>
    );
};

export default Slider;