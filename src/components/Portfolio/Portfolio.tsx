import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
    return (
        <div 
            name='Portfolio' 
            className='bg-gradient-to-b from-slate-900 via-slate-900 to-black w-full text-white md:h-screen'
        >
            <div className='max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-10'>
                    <p className='text-4xl font-bold border-b-4 border-slate-700 inline'>Portfolio</p>
                    <p className='py-5'>Check out some of my work</p>
                </div>
                
                <PortfolioCard />

            </div>
        </div>
    )
}

export default Portfolio