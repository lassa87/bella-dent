import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import U1 from '../assets/images/Untitled-6.jpg';
import U2 from '../assets/images/Untitled-2.jpg';
import U4 from '../assets/images/Untitled-4.jpg';
import U5 from '../assets/images/Untitled-5.jpg';

const items = [
    {
        src: U5,
        altText: 'Slide 1',
        caption: '',
        header: '',
        key: '1'
    },
    {
        src: U1,
        altText: 'Slide 2',
        caption: '',
        header: '',
        key: '2'
    },
    {
        src: U2,
        altText: 'Slide 2',
        caption: '',
        header: '',
        key: '3'
    },
    {
        src: U4,
        altText: 'Slide 2',
        caption: '',
        header: '',
        key: '4'
    },
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;
