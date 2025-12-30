import '../../assets/sass/base/base.scss';
import '../../assets/sass/about/welcome.scss';

const WelcomeComponent = () => {
    return (
        <div className="welcome-section contentPadding">
            <div className="welcome-left">
                <img src={require('../../assets/images/aboutImages/aboutDiscount.png')} alt="aboutDiscount"
                    className="about-discount" />
            </div>
            <div className="welcome-right">
                <div className="welcome-right-section">
                    <h3 className="welcome-right-title">
                        Welcome to Luxury Cols
                    </h3>
                    <p className="welcome-right-stext">
                        Provide best quality of technology and we always focus on quality, design and try to make
                        our customer happy
                    </p>
                    <p className="welcome-right-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ipsam magni quae tempora, alias architecto ratione magnam laudantium adipisci voluptatibus neque inventore provident aut. Cupiditate sit illum similique dignissimos at?
                    </p>
                    <p className="welcome-right-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque, dolores fugit laboriosam, in deleniti placeat iusto aliquid reiciendis aspernatur facilis eaque similique sequi veritatis, expedita autem consequatur alias illum?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeComponent;