import Logo from '../resources/img/logo.png';

const Footer = () => {
    return (
        <footer className="footer container"> 
            <div className="footer__logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="footer__options">
                <h3>Occasions</h3>
                <ul>
                    <li><a href="#">Occasions</a></li>
                    <li><a href="#">Working From Home</a></li>
                    <li><a href="#">Snack Time</a></li>
                    <li><a href="#">Breakfast</a></li>
                    <li><a href="#">Vegan Life</a></li>
                    <li><a href="#">Baking</a></li>
                    <li><a href="#"> Gifts & Bundles</a></li>
                    <li><a href="#">Easy Cooking </a></li>
                    <li><a href="#">All Products</a></li>
                </ul>
            </div>
            <div className="footer__categories">
                <h3>All Categories</h3>
                <ul>
                    <li><a href="#">Baking</a></li>
                    <li><a href="#">Breakfast</a></li>
                    <li><a href="#">Condiments</a></li>
                    <li><a href="#">Drinks</a></li>
                    <li><a href="#">Heat Things Up </a></li>
                    <li><a href="#">Meal Solutions</a></li>
                    <li><a href="#">Pantry Staples</a></li>
                    <li><a href="#">Simmer Sauces</a></li>
                    <li><a href="#"> Snacks & Treats</a></li>
                    <li><a href="#">Spice Up Your Cooking</a></li>
                    <li><a href="#">Sweet Tooth</a></li>
                    <li><a href="#">Wine & Cheese</a></li>
                    <li><a href="#">All Products</a></li>
                </ul>
            </div>
            <div className="footer__gifts">
                <h3>Gifts & Bundles</h3>
                <ul>
                    <li><a href="#"> Sweet Tooth Special</a></li>
                    <li><a href="#">Discover Local</a></li>
                    <li><a href="#">Baking Box</a></li>
                    <li><a href="#">Spicy Heat Lover's Box</a></li>
                    <li><a href="#">Snacking Sensations</a></li>
                </ul>
            </div>
            <div className="footer__brands">
                <h3>Our Brands</h3>
            </div>
            <div className="footer__about">
                <h3>About Us</h3>
            </div>
        </footer>
    );
}

export default Footer;