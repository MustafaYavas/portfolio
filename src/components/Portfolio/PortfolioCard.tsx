import kanban from '../../assets/portfolio/kanban.png';
import movie from '../../assets/portfolio/movie.png';
import weather from '../../assets/portfolio/weather.png';
import styles from './Portfolio.module.css';

const PortfolioCard = () => {
    const portfolios = [
        {
            id: 1,
            imgUrl: movie,
            source: 'https://github.com/MustafaYavas/MovieFinder',
            live: 'https://movies-2ce3f.web.app/home'
        },
        {
            id: 2,
            imgUrl: kanban,
            source: 'https://github.com/MustafaYavas/kanban-board',
            live: 'https://mustafa-yavas-kanban-board.netlify.app/'
        },
        {
            id: 3,
            imgUrl: weather,
            source: 'https://github.com/MustafaYavas/TDD-project',
            live: 'https://tdd-react-weather-app.netlify.app/'
        }
    ]

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0'>
            {
                portfolios.map(port => (
                    <div key={port.id} className='shadow-lg shadow-gray-800 rounded-lg'>
                        <img 
                            src={port.imgUrl} 
                            alt='portfolio_img'
                            className='rounded-t-md duration-500 hover:scale-105'
                        />
                        <div className='flex items-center justify-evenly py-5'>
                            { 
                                port.source && 
                                <button onClick={() => {window.open(port.source)}} className={`${styles.button} w-1/2 `}>
                                    Source
                                </button> 
                            }
                            { 
                                port.live && 
                                <button onClick={() => {window.open(port.live)}} className={`${styles.button} w-1/3`}>
                                    Demo
                                </button> 
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PortfolioCard