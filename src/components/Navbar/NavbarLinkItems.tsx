import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

import { navbarDatas } from './NavbarDatas';

type NavbarLinkProps = {
    toggleBar: (toggle: boolean) => void
}

const NavbarLinkItems = (props: NavbarLinkProps) => {
    const [showbar, setShowBar] = useState<boolean>(false);

    const showBarHandler = (): void => {
        setShowBar(!showbar)
        props.toggleBar(!showbar);
    }

    return (
        <>
            <ul className='hidden md:flex'>
                {
                    navbarDatas.map((data) => (
                        <li 
                            key={data.id} 
                            className='px-4 cursor-pointer text-gray-400 hover:text-rose-500 duration-150'
                        >
                            <Link 
                                to={data.link} 
                                smooth 
                                duration={500}
                            >
                                {data.link}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <div onClick={showBarHandler} className='cursor-pointer z-10 md:hidden'>
                { showbar ? <FaTimes size={25}/> : <FaBars size={25}/>}
            </div>

            { 
                showbar &&
                <ul 
                    className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-900 to-black'
                >
                    {
                        navbarDatas.map((data) => (
                            <li 
                                key={data.id} 
                                className='px-4 cursor-pointer text-white hover:text-rose-500 duration-150 py-6'
                            >
                                <Link
                                    onClick={showBarHandler}
                                    to={data.link}
                                    smooth
                                    duration={500}
                                >
                                    {data.link}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            }
        </>
    )
}

export default NavbarLinkItems;