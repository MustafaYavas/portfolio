import bs from '../../assets/bs.png';
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import java from '../../assets/java.png';
import js from '../../assets/js.png';
import node from '../../assets/node.png';
import react from '../../assets/react.png';
import tailwind from '../../assets/tailwind.png';
import ts from '../../assets/ts.png';

const ExperienceCard = () => {
    const experiences = [
        {
            id: 1,
            name: 'HTML',
            imgUrl: html,
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            name: 'CSS',
            imgUrl: css,
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            name: 'JavaScript',
            imgUrl: js,
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            name: 'Node.js',
            imgUrl: node,
            style: 'shadow-green-500'
        },
        {
            id: 5,
            name: 'React',
            imgUrl: react,
            style: 'shadow-cyan-500'
        },
        {
            id: 6,
            name: 'TypeScript',
            imgUrl: ts,
            style: 'shadow-sky-500'
        },
        {
            id: 7,
            name: 'Tailwind',
            imgUrl: tailwind,
            style: 'shadow-cyan-400'
        },
        {
            id: 8,
            name: 'Bootstrap',
            imgUrl: bs,
            style: 'shadow-purple-500'
        },
        {
            id: 9,
            name: 'Java',
            imgUrl: java,
            style: 'shadow-red-500'
        },
    ]

    return (
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-10 sm:px-0'>
            {
                experiences.map(exp => (
                    <div key={exp.id} className={`${exp.style} shadow-md hover:scale-95 duration-200 py-2 rounded-lg`}>
                        <img src={exp.imgUrl} alt='experience_img' className='w-20 mx-auto'/>
                        <p className='mt-4'>{exp.name}</p>
                    </div>
                ))
            }            
        </div>
    )
}

export default ExperienceCard;