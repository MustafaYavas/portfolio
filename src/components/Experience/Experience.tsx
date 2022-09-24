import ExperienceCard from './ExperienceCard';

const Experience = () => {
    return (
        <div 
            name='Experience'
            className='w-full h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white'
        >
            <div className='max-w-screen-lg mx-auto p-5 flex flex-col justify-center w-full h-full text-white'>
                
                <div className='pb-10 mt-80 sm:mt-0'>
                    <p className='text-4xl font-bold border-b-4 border-slate-700 inline'>Experience</p>
                    <p className='py-5'>Technologies I have used so far</p>
                </div>

                <ExperienceCard />
            </div>

        </div>
    )
}

export default Experience;