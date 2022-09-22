import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { navbarDatas } from './NavbarDatas';

const NavbarLinkItems = () => {
    const [showbar, setShowBar] = useState<boolean>(false);

    const setIconHandler = (): void => {
        setShowBar(!showbar)
    }

    return (
        <>
            <ul className='hidden md:flex'>
                {
                    navbarDatas.map((link) => (
                        <li 
                            key={link.id} 
                            className='px-4 cursor-pointer text-gray-400 hover:text-rose-500 duration-150'
                        >
                            { link.link }
                        </li>
                    ))
                }
            </ul>

            <div onClick={setIconHandler} className='cursor-pointer z-10 md:hidden'>
                { showbar ? <FaTimes size={25}/> : <FaBars size={25}/>}
            </div>

            { 
                showbar &&
                <ul 
                    className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-900 to-black'
                >
                    {
                        navbarDatas.map((link) => (
                            <li 
                                key={link.id} 
                                className='px-4 cursor-pointer text-white hover:text-rose-500 duration-150 py-6'
                            >
                                { link.link }
                            </li>
                        ))
                    }
                </ul>
            }
        </>
    )
}

export default NavbarLinkItems;