import Telescope from '../resources/img/telescope.png';
import Wholesale from '../resources/img/wholesale.png';
import Support from '../resources/img/support.png';
import Group from '../resources/img/group.png';
import Heart from '../resources/img/heart.png';

const Choose = () => {
    return (
        <div className="choose container">
            <h2 className="title">Why choose <span>the Premium Bakery Quality</span></h2>
            <div className="choose__items">
                <div className="choose__item">
                    <img src={Telescope} alt="Item 1" />
                    <h3>Discover new flavours & people</h3>
                    <p>Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find 
                    out where your food comes from and who makes it.</p>
                </div>
                <div className="choose__item">
                    <img src={Wholesale} alt="Item 2" />
                    <h3>Buy wholesale</h3>
                    <p>We offer bulk formats, variety cases, and discovery boxes so you can save money on 
                    delicious foods by buying at wholesale prices.</p>
                </div>
                <div className="choose__item">
                    <img src={Support} alt="Item 3" />
                    <h3>Support your community</h3>
                    <p>By buying in bulk from local and Canadian producers you are helping grow our local food
                    ecosystem, creating jobs, and supporting families and entrepreneurs in your community.
                    </p>
                </div>
                <div className="choose__item">
                    <img src={Group} alt="Item 4" />
                    <h3>Enjoy the best quality</h3>
                    <p>We only offer great tasting, all natural foods that are better for you, and organic 
                    if possible.
                    </p>
                </div>
                <div className="choose__item">
                    <img src={Heart} alt="Item 5" />
                    <h3>Enjoy Club Level Service</h3>
                    <p>As a member of our club, we will make sure you are delighted with our service or 
                    we will make it right!</p>
                </div>
            </div>
        </div>
    );
}

export default Choose;