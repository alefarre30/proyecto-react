import Logo from '../resources/img/logo-blank.png';

const Partners = () => {
    return (
        <div className="partners">
            <div className="partners__container container">
                <h2>Our Charity Partner, City Bakery</h2>
                <img src={Logo} alt="Logo" />
                <a href="#" className="btn btn-orange">Learn more about City Bakery</a>
            </div>
        </div>
    );
}

export default Partners;