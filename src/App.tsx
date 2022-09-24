import { useState } from 'react';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Social from './components/Social/Social';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Intro from './components/Home/Intro';

const App = () => {
    const [showSideBar, setShowSideBar] = useState<boolean>(false);

    const toggleSideBar = (toggle: boolean): void => {
        setShowSideBar(toggle)
    }

    // const openSideBar = () => {
    //     setShowSideBar(true);
    // }

    // const closeSideBar = () => {
    //     setShowSideBar(false);
    // }

    return (
        <div>
            <Navbar toggleBar={toggleSideBar}/>
            <Intro showSideBar={showSideBar}/>
            <Home showSideBar={showSideBar} />
            <About />
            <Portfolio />
            <Experience />
            <Contact />
            <Social />
        </div>
    );
}

export default App;
