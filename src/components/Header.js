import { useState } from 'react';
import Logo from '../resources/img/logo.png';

const Header = ({handleShow, cart}) => {

    const [openNavBar, setOpenNavBar] = useState(false);

    const openNavBarMobile = () => {
        setOpenNavBar(!openNavBar);
    }

    return (
        <header className="header">
            <div className="header__top">
                <span>Free Delivery over $100. Gift with Purchase over $150</span>
            </div>
            <div className="header__navbar container">
                <div className="header__nav">
                    <div className="header__logo">
                        <img src={Logo} alt="Practica Numen" />
                    </div>
                    <div className="header__menu">
                        <ul>
                            <li><a href="#">Occasions</a></li>
                            <li><a href="#">All Categories</a></li>
                            <li><a href="#">Gift & Bundles</a></li>
                            <li><a href="#">Our Brands</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>
                    <a href="javascript:void(0);" onClick={() => openNavBarMobile()} className="header__menu--icon">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
                <div class="header__navbar-mobile" style={{display:(!openNavBar)?'none':'block'}}>
                    <ul>
                        <li><a href="#">Occasions</a></li>
                        <li><a href="#">All Categories</a></li>
                        <li><a href="#">Gift & Bundles</a></li>
                        <li><a href="#">Our Brands</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div className="header__actions">
                    <div className="header__actions--search">
                        <a href="#"><i className="fas fa-search"></i></a>
                    </div>
                    <div className="header__actions--account">
                        <a href="#"><i className="far fa-user"></i></a>
                    </div>
                    <div className="header__actions--cart">
                        <span className="count-cart">{cart.length}</span>
                        <a href="javascript:void(0);" onClick={handleShow}><i className="fas fa-shopping-cart"></i></a>
                    </div>
                </div>
            </div>
            <div className="header__banner">
                <div className="container">
                    <h1>Support Your Local Artisans</h1>
                    <p>Discover brands and theit stories</p>
                    <button href="#" className="btn btn-orange">Browse bands</button>
                </div>
            </div>
        </header>
    );
}

export default Header;