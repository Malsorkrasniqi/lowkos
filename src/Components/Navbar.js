import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../Images/Group 45.png';
import { FaGavel, FaLandmark, FaRegFileAlt, FaPlug, FaBalanceScale, FaTools, FaBook } from 'react-icons/fa';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#">About</a></li>

                {/* Services Dropdown */}
                {/* Services Dropdown */}
                {/* Services Dropdown */}
                {/* Services Dropdown */}
                <li className="dropdown">
                    <a href="#" onClick={() => toggleDropdown('services')}>
                        <FaTools className="nav-icon" /> Services
                    </a>
                    {openDropdown === 'services' && (
                        <ul className="dropdown-menu">
                            <li className='li-box'>
                                <FaGavel className="icon" />
                                <div>
                                    <a href="#">Corporate Law</a>
                                </div>
                            </li>
                            <li className='li-box'>
                                <FaLandmark className="icon" />
                                <div>
                                    <a href="#">Real Estate</a>
                                </div>
                            </li>
                            <li className='li-box'>
                                <FaRegFileAlt className="icon" />
                                <div>
                                    <a href="#">Tax & Customs Laws</a>
                                </div>
                            </li>
                            <li className="li-box">
                                <FaPlug className="icon" />
                                <div>
                                    <a href="#">Energy & Infrastructure</a>
                                </div>
                            </li>
                            <li className='li-box'>
                                <FaBalanceScale className="icon" />
                                <div>
                                    <a href="#">Public Procurement</a>
                                </div>
                            </li>
                            <li className='li-box'>
                                <FaGavel className="icon" />
                                <div>
                                    <a href="#">Corporate Law</a>
                                </div>
                            </li>
                            <li className='li-box'>
                                <FaLandmark className="icon" />
                                <div>
                                    <a href="#">Real Estate</a>
                                </div>
                            </li>
                            <li className='li-box'>
                                <FaRegFileAlt className="icon" />
                                <div>
                                    <a href="#">Tax & Customs Laws</a>
                                </div>
                            </li>
                            <li className="li-box">
                                <FaPlug className="icon" />
                                <div>
                                    <a href="#">Energy & Infrastructure</a>
                                </div>
                            </li>
                            <li className='li-box'>
                                <FaBalanceScale className="icon" />
                                <div>
                                    <a href="#">Public Procurement</a>
                                </div>
                            </li>
                            <div className="dropdown-description">
                                <div>
                                    <h2>Personal</h2>
                                    <p>From family law to personal injury, we treat your case with the care it deserves. Let's protect what matters most to you.</p>
                                </div>
                                <div>
                                    <h2>Corporate</h2>
                                    <p>Our corporate services are designed to support your business growth and success. Let's build your future together.</p>
                                </div>
                            </div>
                        </ul>
                    )}
                </li>

                {/* Resources Dropdown */}
                <li className="dropdown">
                    <a href="#" onClick={() => toggleDropdown('resources')}>
                        <FaBook className="nav-icon" /> Resources
                    </a>
                    {openDropdown === 'resources' && (
                        <ul className="dropdown-menu">
                            <li className="li-box">
                                <FaRegFileAlt className="icon" />
                                <div>
                                    <a href="#">Resource 1</a>
                                    <p>Detailed description of Resource 1.</p>
                                </div>
                            </li>
                            <li className="li-box">
                                <FaRegFileAlt className="icon" />
                                <div>
                                    <a href="#">Resource 2</a>
                                    <p>Detailed description of Resource 2.</p>
                                </div>
                            </li>
                        </ul>
                    )}
                </li>

                <li><a href="#">News</a></li>
                <li><a href="#">Careers</a></li>
            </ul>

            <div className="contact">
                <span>+383 123 456 789</span>
                <button>Contact us</button>
            </div>
        </nav>
    );
};

export default Navbar;
