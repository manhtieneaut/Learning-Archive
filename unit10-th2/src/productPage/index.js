import React from "react";
import "../productPage/product.css"


const Product = () => {
    return (

        <div className="main-wrapper">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <div className="header">
                <ul className="Navbar">
                    <li>LOGO</li>
                    <li>Home</li>
                    <li>Pages</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li className="search"><input placeholder="Search" /><button><i class="fas fa-search"></i></button></li>
                    <li><i class="far fa-user"></i></li>
                    <li><i class="fas fa-shopping-cart"></i></li>
                </ul>
                <div className="head-introduce">
                    <div className="introduce">
                        <h1>Our Products</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        <p> scelerisque a tincidunt urna nisl quam orci males</p>
                    </div>
                    <img className="head-img" src={require('./img/head-img.png')} alt="souvenir" />
                </div>
            </div>


            <div className="items">
                <div className="row">
                    <h1 className="title">Products</h1>
                </div>
                <div className="row">
                    <i class="fas fa-th"></i><i class="fas fa-bars"></i>
                </div>
                <div className="row">
                    <div className="col">
                        <img className="item-img" src={require('./img/iphone.jpg')} alt="souvenir" />
                        <h2>Iphone</h2>
                        <h3>30000$</h3>
                    </div>
                    <div className="col">
                        <img className="item-img" src={require('./img/iphone.jpg')} alt="souvenir" />
                        <h2>Iphone</h2>
                        <h3>30000$</h3>
                    </div>
                    <div className="col">
                        <img className="item-img" src={require('./img/iphone.jpg')} alt="souvenir" />
                        <h2>Iphone</h2>
                        <h3>30000$</h3>
                    </div>
                    <div className="col">
                        <img className="item-img" src={require('./img/iphone.jpg')} alt="souvenir" />
                        <h2>Iphone</h2>
                        <h3>30000$</h3>
                    </div>
                </div>
            </div>


            <div className="footer">
                <div className="footer-start">
                    <div className="col">
                        <h1>Logo</h1>
                        <p>Features that we have
                            which lorem ipsum dolor
                            sit amet, consectetur</p>
                        <p>Follow us</p>
                        <p>icon</p>
                    </div>
                    <div className="col">
                        <h1>Company</h1>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Our Blog Post</p>
                        <p>Contact</p>
                        <p>Login</p>
                        <p>Resister</p>
                        <p>Shop</p>
                    </div>
                    <div className="col">
                        <h1>Information</h1>
                        <p>Terms & Conditions</p>
                        <p>Style Guide</p>
                        <p>Changelog</p>
                        <p>Licenses</p>
                    </div>
                    <div className="col">
                        <h1>Contact Us</h1>
                        <p>256, Central City, Borlex House Main town, New York, USA</p>
                        <p>+880(12) 125 48765</p>
                        <p>www.examples.com</p>
                    </div>
                </div>

                <div className="footer-end">
                    <p>
                        © 2022 design and developed by Brandbes. Powered by Webflow.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Product;