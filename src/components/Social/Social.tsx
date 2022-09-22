import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillFilePdf } from 'react-icons/ai';

const Social = () => {
    const socialDatas = [
        {
            id: 1,
            child: (
                <>
                    Github
                    <FaGithub />
                </>
            ),
            href: 'https://github.com/MustafaYavas',
            style: 'rounded-tr-3xl text-slate-500',
        },
        {
            id: 2,
            child: (
                <>
                    LinkedIn
                    <FaLinkedin />
                </>
            ),
            href: 'https://www.linkedin.com/in/mustafa-yavas-936431199/',
            style: 'text-blue-700',
        },
        {
            id: 3,
            child: (
                <>
                    Mail
                    <HiOutlineMail />
                </>
            ),
            href: 'mailto:mustafayavas40@gmail.com',
            style: 'text-rose-500',
        },
        {
            id: 4,
            child: (
                <>
                    Resume
                    <AiFillFilePdf />
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-3xl text-red-800',
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {
                    socialDatas.map(social => (
                        <li 
                            key={social.id}
                            className={`flex justify-between items-center w-40 h-14 px-5 ml-[-100px] hover:ml-[-10px] duration-300 bg-black ${social.style}`}
                        >
                            <a 
                                href={social.href}
                                target='_blank' 
                                rel='noreferrer'
                                className='flex justify-between items-center w-full '
                            >
                                { social.child }
                            </a>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    )
}

export default Social