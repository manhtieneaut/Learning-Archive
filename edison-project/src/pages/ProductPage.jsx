import Advertise from "../components/Common/Advertise";
import Header from "../components/Common/Header";
import NewsLetter from "../components/Common/NewsLetter";
import Footer from "../components/Common/Footer";
import Copyright from "../components/Common/Copyright";

import ProductBody from "../components/Product/ProductBody";

const ProductPage = () => {
    return (
        <div className="App">
            <Advertise></Advertise>
            <Header></Header>
            <ProductBody></ProductBody>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
            <Copyright></Copyright>
        </div>
    )
}
export default ProductPage;