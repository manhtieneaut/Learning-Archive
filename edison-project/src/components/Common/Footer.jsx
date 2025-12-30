import '../../assets/sass/base/base.scss';
import '../../assets/sass/common/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrap">
                <div className="nav-list">
                    <div className="nav-list-wrap">
                        <a href="/Home" className='footer-logo'>
                            <img src={require('../../assets/images/headerImages/HeaderLogo.png')} alt="footer-logo" className="footer-img" />
                        </a>
                        <p className="nav-list-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repudiandae.
                        </p>
                        <h3 className="nav-list-title follow-title">Folow us</h3>
                        <div className="social-link">
                            <a href="https://www.facebook.com/maiyon9x/">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/home">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://www.behance.net/">
                                <i className="fa-brands fa-behance"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="nav-list">
                    <div className="nav-list-wrap">
                        <h3 className="nav-list-title">Company</h3>
                        <div className="nav-list-link">
                            <a href="/Home">Home</a>
                            <a href="/About">About us</a>
                            <a href="/Contact">Contact us</a>
                            <a href="/#">Categories</a>
                            <a href="/Product">Products</a>
                            <a href="/#">Cart</a>
                            <a href="/#">Payment</a>
                        </div>
                    </div>
                </div>
                <div className="nav-list">
                    <div className="nav-list-wrap">
                        <h3 className="nav-list-title">Information</h3>
                        <div className="nav-list-link">
                            <a href="/#">Terms & Conditions</a>
                            <a href="/Register">Register</a>
                            <a href="/Login">Login</a>
                            <a href="/#">Forgot password</a>
                            <a href="/#">Change password</a>
                        </div>
                    </div>
                </div>
                <div className="nav-list">
                    <div className="nav-list-wrap">
                        <h3 className="nav-list-title">Contact Us</h3>
                        <h3 className="nav-list-text">+(84) 822206919</h3>
                        <h3 className="nav-list-text">Nguyễn Hồng Quân</h3>
                        <p className="nav-list-text">maiyonaisu1102@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;