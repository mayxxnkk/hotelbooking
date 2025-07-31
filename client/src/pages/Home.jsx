import React from 'react'
import Hero from '../components/Hero';
import FeaturedDestination from '../components/FeaturedDestination';
import Title from '../components/Title';
import ExclusiveOffers from '../components/ExclusiveOffers';
import Testimonial from '../components/Testimonial';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
        <Hero />
        <Title />
        <FeaturedDestination />
        <ExclusiveOffers />
        <Testimonial />
        <NewsLetter />
        
        </>
    )
}

export default Home