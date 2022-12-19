import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/logo.png';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/'>FEATURES</Link></li>
                        <li><Link to='/'>PORTFOLIO</Link></li>
                        <li><Link to='/'>RESUME</Link></li>
                        <li><Link to='/'>TESTIMONIAL</Link></li>
                        <li><Link to='/'>CLIENTS</Link></li>
                        <li><Link to='/'>PRICING</Link></li>
                        <li><Link to='/'>BLOG</Link></li>
                        <li><Link to='/'>CONTACTS</Link></li>
                    </ul>
                </div>
                <img className='w-40 pl-3' src={logo} alt="website logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><Link to='/'>HOME</Link></li>
                        <li><Link className='text-sm' to='/'>FEATURES</Link></li>
                        <li><Link className='text-sm' to='/'>PORTFOLIO</Link></li>
                        <li><Link className='text-sm' to='/'>RESUME</Link></li>
                        <li><Link className='text-sm' to='/'>TESTIMONIAL</Link></li>
                        <li><Link className='text-sm' to='/'>CLIENTS</Link></li>
                        <li><Link className='text-sm' to='/'>PRICING</Link></li>
                        <li><Link className='text-sm' to='/'>BLOG</Link></li>
                        <li><Link className='text-sm' to='/'>CONTACTS</Link></li>
                </ul>
                </div>
                <div className="navbar-end">
                    <Link className='btn btn-primary'>Download CV</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;