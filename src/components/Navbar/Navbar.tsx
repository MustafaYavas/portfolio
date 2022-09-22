import NavbarLinkItems from './NavbarLinkItems';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full h-20 fixed text-white bg-slate-900 px-5'>
            <div className='flex justify-center items-between'>
                <h1 className='font-logo text-4xl'>Mustafa</h1>
            </div>

            <NavbarLinkItems />
        </div>
    )
}

export default Navbar