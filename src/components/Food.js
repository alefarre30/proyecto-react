import FoodImage from '../resources/img/food.png';

const Food = () => {
    return (
        <div className="food">
            <div className="food__container container">
                <div className="food__text">
                    <h2>Who Makes <span>Your Food?</span></h2>
                    <p>Our mission is to help grow the local food ecosystem in BC and across Canada. Why?</p>
                    <ul>
                        <li>Because it connects us to the land we live on, and to the people who live here.</li>
                        <li>Because it’s more meaningful to cook and eat something made by a person nearby than by some distant corporation.</li>
                        <li>Because good local food makes our corner of the world a better place to live.</li>
                        <li>Because it supports local jobs.</li>
                        <li>Because it makes more sense for the environment.</li>
                    </ul>
                    <a href="#" className="btn btn-orange">Discover our Producers</a>
                </div>
                <div className="food__img">
                    <img src={FoodImage} alt="Food" />
                </div>
            </div>
        </div>
    );
}

export default Food;