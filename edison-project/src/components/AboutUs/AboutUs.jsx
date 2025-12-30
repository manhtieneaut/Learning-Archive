import WelcomeComponent from './Welcome';
import FunFactComponent from './FunFact';
import PromoComponent from './Promo';

const AboutUsBody = () => {
    return (
        <div className="about-section">
            <WelcomeComponent></WelcomeComponent>
            <FunFactComponent></FunFactComponent>
            <PromoComponent></PromoComponent>
        </div>
    )
}
export default AboutUsBody;