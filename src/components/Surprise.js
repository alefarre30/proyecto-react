import ImageSurprise from '../resources/img/surprise.png';

const Surprise = () => {
    return (
        <div className="surprise">
            <div className="surprise__container container">
                <div className="surprise__img">
                    <img src={ImageSurprise} alt="Surprise" />
                </div>
                <div className="surprise__text">
                    <h2>Surprise Someone</h2>
                    <h3>Working from Home</h3>
                    <p>Do you have a colleague or family member working hard at home? Our Working From Home box of 
                    snacks and drinks is the perfect way to put a smile on their face, delivered direct 
                    to their door.</p> 
                    <p>To buy for a large group of people, get in touch and we can discuss bespoke bundles and 
                    personalised messaging.</p>
                    <a href="#" className="btn btn-orange">Buy now</a>
                </div>
            </div>
        </div>
    );
}

export default Surprise;