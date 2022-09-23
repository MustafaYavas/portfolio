import profileImg from '../../assets/hero.jpeg'
import styles from './Home.module.css';

import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='Home' className='h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-black'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row'>
                <div className='text-white flex flex-col justify-center h-full'>

                    <h2 className='text-4xl sm:text-6xl font-bold'>
                        I'm a Full Stack Developer
                    </h2>
                    <p className='text-slate-500 py-5 max-w-md'>
                        I've been developing software for about 4 years. I have used many different software languages such as C, Java, C# and JavaScript. I am currently progressing on Web Development. I use different web technologies like TypeScript, Node.js, React and Tailwind. You can reach some of the projects I have done so far on my&nbsp;
                        <a 
                            href='https://github.com/MustafaYavas' 
                            target='_blank'
                            rel='noreferrer'
                            className='underline text-slate-400 hover:text-rose-500'
                        >
                            Github
                        </a> address.
                    </p>

                    <div className='invisible lg:visible mt-5 font-bold'>
                        <Link to='Portfolio' smooth duration={500}>
                            <button  className={styles.button}>
                                Portfolio
                                <span>
                                    <MdArrowForwardIos className='ml-1 mb-0.5'/>
                                </span>
                            </button>
                        </Link>
                    </div>

                </div>

                <div>
                    <img src={profileImg} alt='profile_img' className={`${styles['main_img']} rounded-3xl mx-auto lg:w-full`}/>
                </div>
            </div>
        </div>
    )
}

export default Home;