import '../../assets/sass/base/base.scss';
import '../../assets/sass/contact/contact.scss';

const ContactUsBody = () => {
    return (
        <div className="contact-section">
            <div className="contact-title">
                <h2>
                    Connect with us
                </h2>
                <p>
                    Let’s talk about this website or project. Send us a message and we will be in touch within one work day
                </p>
            </div>
            <div className="contact-block">
                <div className="contact-wrap">
                    <h4>
                        Address
                    </h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="contact-wrap">
                    <h4>
                        Phone
                    </h4>
                    <p>
                        (+84) 822206919
                    </p>
                </div>
                <div className="contact-wrap">
                    <h4>
                        Email
                    </h4>
                    <p>
                        maiyonaisu1102@gmail.com
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ContactUsBody;