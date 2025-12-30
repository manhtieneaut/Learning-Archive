import '../../assets/sass/base/base.scss';
import '../../assets/sass/common/newsletter.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const NewsLetter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-block">
                <div className="newsletter-wrap">
                    <div className="newsletter-title">
                        <p>Subscribe our Newsletter</p>
                    </div>
                    <div className="newsletter-form-wrap">
                        <form action="#" method="get" className="newsletter-form">
                            <input type="text" placeholder="Enter your email here" className="newsletter-input" />
                            <button className="newsletter-button">
                                <FontAwesomeIcon icon={solid("arrow-right")} className="newsletter-icon" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsLetter;