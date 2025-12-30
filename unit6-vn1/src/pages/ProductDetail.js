import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () =>{
   const {ProductId} = useParams()


    return(
        <div>
            <h1>Đây là chi tiết sản phẩm</h1>
            ID = {ProductId}

        </div>

    )
}

export default ProductDetail;