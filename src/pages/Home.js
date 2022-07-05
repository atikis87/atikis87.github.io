import React, {useState} from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/Hero';
import About from '../components/About/About';
import { homeObjOne,} from '../components/About/data';
import Passion from '../components/Passion/Passion';


const Home = () =>
{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>
    {
        setIsOpen(!isOpen)
    }


    return (
        <>
        <Navbar toggle={toggle} />
        <HeroSection />
        <About {...homeObjOne}/>
        <Passion />
        </>
    );
};

export default Home;