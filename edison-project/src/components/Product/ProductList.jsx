import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import SortFilter from '../Filter/Filter';

import { searchProduct, filterProduct } from '../../Redux/productSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../assets/sass/base/base.scss';
import '../../assets/sass/product/productList.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [post, setPost] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const handleFilter = (key) => {
    dispatch(filterProduct(key))
      .then((action) => {
        setPost(action.payload);
      })
      .catch((error) => {
        console.error('Error searching products:', error);
      });
  }
  const handleSearch = (key) => {
    dispatch(searchProduct(key))
      .then((action) => {
        setPost(action.payload);
      })
      .catch((error) => {
        console.error('Error searching products:', error);
      });
  };

  useEffect(() => {
    const getTotalProducts = async () => {
      try {
        let response = await fetch(`https://dummyjson.com/products?select=_id`);
        let data = await response.json();
        setTotalProducts(data.total);
      } catch (error) { }
    };
    getTotalProducts();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(`https://dummyjson.com/products?limit=6&skip=${(currentPage - 1) * 6}&select=title,price,images`);
        let data = await response.json();
        setPost(data.products);
      } catch (error) { }
    };
    getData();
  }, [currentPage]);

  const addToCart = (item) => {
    try {
      localStorage.removeItem('cart');
      console.log(item)
      // Lưu sản phẩm vào local storage
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log('cart:', cart);
    } catch (error) {
      console.error('Lỗi khi thêm vào giỏ hàng:', error);
    }
    navigate('/Cart');
  };

  return (
    <div class="product-section">
      <div class="product-block">
        <div className="product-wrap">
          <div class="product-title-wrap">
            <h2 class="product-title">Product Collections</h2>
            <p class="product-title-desc">Most Selling and Trending Product</p>
          </div>
          <Search onSearch={handleSearch} />
          <SortFilter onFilter={handleFilter} />
          <div class="product-items">
            {post?.map(item => {
              return (
                <div class="product-item" key={item?.id}>
                  <a href='/#' onClick={(e) => addToCart(item)}>
                    <div class="product-item-image">
                      <img src={item.images[0]} alt="productItem" />
                    </div>
                    <h4 class="product-item-title">
                      {item?.title}
                    </h4>
                    <p class="product-item-cost">
                      $ {item?.price} USD <span class="product-item-discount">$ discountPrice USD</span>
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalProducts / 6)}
            onChangePage={(page) => setCurrentPage(page)}
          ></Pagination>
        </div>
      </div>
    </div>
  )
}
export default ProductList;