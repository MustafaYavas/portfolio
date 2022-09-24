import logo from '../../assets/rocket.png'
import NavbarLinkItems from './NavbarLinkItems';

type NavbarProps = {
    toggleBar: (toggle: boolean) => void
}

const Navbar = (props: NavbarProps) => {
    return (
        <div className='flex justify-between items-center w-full h-20 fixed text-white bg-slate-900 px-5 z-10'>
            <div className='flex justify-center items-center'>
                <h1 className='font-logo text-3xl mr-5'>My Portfolio</h1>
                <img src={logo} alt='logo' style={{width: '25px'}}/>
            </div>

            <NavbarLinkItems toggleBar={props.toggleBar}/>
        </div>
    )
}

export default Navbar