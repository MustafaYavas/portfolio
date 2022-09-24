import { useState, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll'; 
import { motion } from 'framer-motion';

import styles from './Intro.module.css';
import { useFollowPointer } from '../../utils/use-follow-pointer';
import rocket from '../../assets/rocket.png'

type StartingPageProps = {
    showSideBar: boolean,
}

const StartingPage = (props: StartingPageProps) => {
    const [showButton, setShowButton] = useState<boolean>(false);
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    return (
        <div name='Starting' className='h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-black'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
                <div className='text-white flex flex-col justify-center items-center'>
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

                    <motion.div 
                        className='box invisible lg:visible '
                        ref={ref}
                        animate={{ x, y }}
                        transition={{
                            type: 'spring',
                            damping: 10,
                            stiffness: 50,
                            restDelta: 0.001,
                        }}
                        
                    >
                        <img src={rocket} alt='rocket' style={{width: '50px'}}/>
                    </motion.div>   

                    {
                        showButton && !props.showSideBar && 
                        <div>
                            <Link to='Home' smooth duration={500}>
                                <button className={`${styles.button} mt-10 md:mt-0`}> LET'S START </button>
                            </Link>
                        </div>
                    }
                </div>  
                
            </div>
        </div>
    )
}

export default StartingPage;