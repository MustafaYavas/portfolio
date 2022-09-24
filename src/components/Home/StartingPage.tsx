import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll'; 

import styles from './StartingPage.module.css';

type StartingPageProps = {
    showSideBar: boolean,
}

const StartingPage = (props: StartingPageProps) => {
    const [showButton, setShowButton] = useState<boolean>(false);

    return (
        <div name='Starting' className='h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-black'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row'>
                <div className='text-white flex flex-col justify-center '>
                    <h1 
                        className={`text-4xl sm:text-6xl font-bold text-center md:text-left ${props.showSideBar ? 'invisible' : 'visible'}`}
                    >
                        <Typewriter
                            options={{
                                autoStart: true
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('Hello there!')
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString('My name is Mustafa')
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString('Welcome')
                                .pauseFor(1000)
                                .callFunction(() => {
                                    setShowButton(true);
                                })
                                .start();
                            }}
                        />
                    </h1>
                </div>  
                { showButton && <div className='w-screen'></div>}     
                <div>
                    { 
                        showButton && !props.showSideBar &&
                        <Link to='Home' smooth duration={500}>
                            <button className={`${styles.button} mt-10 md:mt-0`}> LET'S START </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default StartingPage