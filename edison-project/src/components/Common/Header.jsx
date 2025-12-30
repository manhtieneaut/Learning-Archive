import '../../assets/sass/base/base.scss';
import '../../assets/sass/common/header.scss';

import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Product");
    }
    return (
        <header className="header">
            <div className="header-background">
                <div className="header-background-primary"></div>
                <div className="header-background-secondary"></div>
            </div>
            <div className="header-top-section">
                <div className="header-top-block">
                    <div className="header-top-wrap contentPadding">
                        <a href="/Home" className="header-logo">
                            <img src={require('../../assets/images/headerImages/HeaderLogo.png')}
                                alt="header-logo" className='header-img' />
                        </a>
                        <nav className="navbar">
                            <div className="navItem">
                                <a href="/Home">Home</a>
                            </div>
                            <div className="navItem">
                                <a href="/About">About</a>
                            </div>
                            <div className="navItem">
                                <a href="/Contact">Contact</a>
                            </div>
                            <div className="navItem">
                                <a href="/Terms">Terms & Condition</a>
                            </div>
                        </nav>
                        <div className="header-top-form">
                            <a href="/Login">
                                <i class="fa-solid fa-user header-signin-icon"></i>
                            </a>
                            <a href="/#">
                                <i class="fa-solid fa-cart-shopping header-cart-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header-middle-section">
                    <div className="header-slider">
                        <div className="slider-left">
                            <p className="slider-left-slogan">
                                100% QUALITY - 100% SATISFACTION
                            </p>
                            <p className="slider-left-title">
                                Modern & Smart Technology Devices
                            </p>
                            <p className="slider-left-text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eos illo expedita
                                dolor
                                delectus mollitia voluptatibus provident quaerat molestias hic voluptates perspiciatis
                                ex?
                                Autem ab, repellat placeat voluptatibus eveniet architecto!
                            </p>
                            <button className="slider-left-btn" onClick={handleClick}>
                                shop now
                            </button>
                        </div>
                        <div className="slider-right">
                            <a href="/Product" className='advertise-aside-wrap'>
                                <img src={require("../../assets/images/headerImages/laptopAdvertise.png")}
                                    alt="advertise-aside" className='advertise-aside' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;