import NavbarLinkItems from './NavbarLinkItems';

type NavbarProps = {
    toggleBar: (toggle: boolean) => void
}

const Navbar = (props: NavbarProps) => {
    return (
        <div className='flex justify-between items-center w-full h-20 fixed text-white bg-slate-900 px-5'>
            <div>
                <h1 className='font-logo text-4xl'>Mustafa</h1>
            </div>

            <NavbarLinkItems toggleBar={props.toggleBar}/>
        </div>
    )
}

export default Navbar