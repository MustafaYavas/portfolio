
const About = () => {
    return (
        <div 
            name='About' 
            className='w-full h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white'
        >
            <div className='max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-10'>
                    <p className='text-4xl font-bold border-b-4 border-slate-700 inline'>About Me</p>
                </div>

                <p className='text-lg'>
                    My name is Mustafa Yavaş. I am 23 years old and I am Turkish. I live in Denizli. I went to primary and high school in Denizli. Then I continued my education life at Pamukkale University. During this time, I had the opportunity to study in Poland for a semester. After five years of education, I graduated from the Computer Engineering department.
                </p>

                <br />

                <p className='text-lg'>
                    My real acquaintance with software took place in my university life. In this process, although I learned and interested in many different software languages, I developed myself mostly in JavaScript. I am currently in the field of Web Development. The technologies I use the most are React.js and Node.js. I have developed many different projects to improve myself in this field.
                </p>

                <br />

                <p className='text-lg'>
                    Scroll down to see some.
                </p>
            </div>
        </div>
    )
}

export default About