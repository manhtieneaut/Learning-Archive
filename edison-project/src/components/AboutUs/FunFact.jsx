import '../../assets/sass/base/base.scss';
import '../../assets/sass/about/funfact.scss';

const FunFactComponent = () => {
    return (
        <div className="funfact-section contentPadding">
            <div className="funfact-item">
                <h2 className="funfact-title">20k+</h2>
                <p className="funfact-text">Properties</p>
            </div>
            <div className="funfact-item">
                <h2 className="funfact-title">12k+</h2>
                <p className="funfact-text">Customers</p>
            </div>
            <div className="funfact-item">
                <h2 className="funfact-title">62+</h2>
                <p className="funfact-text">Agents</p>
            </div>
            <div className="funfact-item">
                <h2 className="funfact-title">160+</h2>
                <p className="funfact-text">Awards Win</p>
            </div>
        </div>
    )
}
export default FunFactComponent;