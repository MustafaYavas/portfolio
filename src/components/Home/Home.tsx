import profileImg from '../../assets/hero.jpg'
import styles from './Home.module.css';

import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-scroll';

type HomeProps = {
    showSideBar: boolean,
}

const Home = (props: HomeProps) => {
    return (
        <div name='Home' className='h-screen w-full bg-gradient-to-b from-black via-slate-900 to-slate-900'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row'>
                <div className='text-white flex flex-col justify-center '>
                    <h2 className='text-4xl sm:text-6xl font-bold text-center md:text-left'>
                        I'm a Full Stack Developer
                    </h2>
                    <div className='text-center md:text-left'>
                        <p className='text-slate-500 py-5 md:max-w-md'>
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
                    </div>

                    {
                        !props.showSideBar &&
                        <div className='mt-5 font-bold flex justify-center md:justify-start'>
                            <Link to='About' smooth duration={500}>
                                <button className={styles.button}>
                                    About Me
                                    <span>
                                        <MdArrowForwardIos className='ml-1 mb-0.5'/>
                                    </span>
                                </button>
                            </Link>
                        </div>
                    }

                </div>

                <div>
                    <img src={profileImg} alt='profile_img' className={`rounded-3xl mx-auto w-2/3 md:w-full mt-10 md:mt-0`}/>
                </div>
            </div>
        </div>
    )
}

export default Home;