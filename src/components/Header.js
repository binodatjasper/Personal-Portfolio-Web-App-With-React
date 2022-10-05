import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    // import logo
    const logoUrl = process.env.PUBLIC_URL + 'assets/images/logo.png';

    return (
        <header className='header'>
            <div className='container'>
                <div className='col-sm-2'>
                    <div className='header__logo'>
                        <img src={logoUrl} alt="Code with Binod"></img>
                    </div>
                </div>
                <div className='col-sm-10'>
                    <nav className='header__nav'>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about-me'>About Me</Link>
                            </li>
                            <li>
                                <Link to='/services'>Services</Link>
                            </li>
                            <li>
                                <Link to='/portfolios'>Portfolios</Link>
                            </li>
                            <li>
                                <Link to='/my-resume'>My Resume</Link>
                            </li>
                            <li>
                                <Link to='/book-appointment'>Book Appointment</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;