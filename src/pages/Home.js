import React, {useState} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import HeroSection from '../components/HeroSection/Hero';
import Experiense from '../components/Experience/Experience';
import About from '../components/About/About';
import { homeObjOne,} from '../components/About/data';
import Passion from '../components/Passion/Passion';
//import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () =>
{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>
    {
        setIsOpen(!isOpen)
    }


    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <About {...homeObjOne}/>
        <Passion />
        <Experiense />
        <Projects />
        <Contact />
		<Footer />
        </>
    );
};

export default Home;