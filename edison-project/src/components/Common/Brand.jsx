import '../../assets/sass/base/base.scss';
import '../../assets/sass/common/brand.scss';

const BrandComponent = () => {
    return (
        <div className="brand-block">
            <div class="brand-wrap">
                <div class="brand-items">
                    <div class="brand-item">
                        <img src={require('../../assets/images/sliderImages/slider1.png')} alt="slider1" className='brand-item-image' />
                    </div>
                    <div class="brand-item">
                        <img src={require('../../assets/images/sliderImages/slider2.png')} alt="slider2" className='brand-item-image' />
                    </div>
                    <div class="brand-item">
                        <img src={require('../../assets/images/sliderImages/slider3.png')} alt="slider3" className='brand-item-image' />
                    </div>
                    <div class="brand-item">
                        <img src={require('../../assets/images/sliderImages/slider4.png')} alt="slider4" className='brand-item-image' />
                    </div>
                    <div class="brand-item">
                        <img src={require('../../assets/images/sliderImages/slider5.png')} alt="slider5" className='brand-item-image' />
                    </div>
                    <div class="brand-item">
                        <img src={require('../../assets/images/sliderImages/slider6.png')} alt="slider6" className='brand-item-image' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BrandComponent;