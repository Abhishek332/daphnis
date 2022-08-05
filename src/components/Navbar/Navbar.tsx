import './Navbar.scss';
import NavItem from './NavItem';
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
    const navItems: NavItem[] = [
        { name: 'Home', link: '' },
        { name: 'products', link: '' },
        { name: 'distributers', link: '' },
        { name: 'Manufacturers', link: '' },
        { name: 'About Us', link: '' },
        { name: 'blog', link: '' },
    ]


    return (
        <div className="navbar">
            <div className="left">
                <div className="logo"></div>
                <h1>Medical Darpan</h1>
                <div className="nav-items">
                    {
                        navItems.map((navItem, i) => <NavItem key={`navItem-${i}`} {...navItem} />)
                    }
                </div>
            </div>
            <div className="right">
                <p>Login</p>
                <BiUserCircle size={40} />
            </div>

        </div>
    )
}

export default Navbar