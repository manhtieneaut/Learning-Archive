import '../../assets/sass/base/base.scss';
import '../../assets/sass/common/header.scss';
import '../../assets/sass/common/header-bottom.scss';

import { useNavigate } from 'react-router-dom';

const HeaderBottom = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Product");
    }
    return (
        <div className="header-bottom-section">
            <div className="header-bottom">
                <div className="header-bottom-img">
                    <img src={require('../../assets/images/headerImages/header-bottom-image.jpg')}
                        alt="header-bottom-img" className='header-bottom-image' />
                </div>
                <div className="header-bWrap">
                    <button className="header-bWrap-btn" onClick={handleClick}>
                        shop now
                    </button>
                </div>
            </div>
        </div>
    )
}
export default HeaderBottom;