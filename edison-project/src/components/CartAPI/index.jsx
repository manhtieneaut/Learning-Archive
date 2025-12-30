const Cart = () => {
  // const [data, setData] = useState([])
  // const { userId } = useParams();
  //Lấy dữ liệu bằng fetch id bằng 
  // useEffect(() => {
  //   getCartByUserId();
  // }, [userId])
  // const getCartByUserId = async () => {
  //   return await fetch(`https://dummyjson.com/carts/user/${userId}`)
  //     .then(res => res.json())
  //     .then(data => setData(data.carts[0]))
  //     .catch(err => console.log(err))
  // }

  //Lấy dữ liệu bằng local storate
  const cartJson = localStorage.getItem('cart');
  const cart = JSON.parse(cartJson);



  // Kiểm tra xem giỏ hàng có chứa sản phẩm hay không
  if (cart && cart.length > 0) {
    // console.log(cart)
    return (
      <div>
        <h1>Giỏ hàng của bạn</h1>
        <table>
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng cộng</th>
            </tr>
          </thead>
          <tbody>
            {
              cart?.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product.title}</td>
                    <td>{product.price} USD</td>
                    <td>{product.quantity}</td>
                    <td>{product.total}USD</td>
                  </tr>
                )
              })
            }

            <tr>
              <td colSpan="3">
                <strong>Tổng tiền:</strong>
              </td>
              <td>
                <strong>100000 USD</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button className="button">Thanh toán</button>
      </div>

    )
  } else {
    return (
      <h1>ko có sản phẩm trong giỏ hàn hàng</h1>

    )
  }
}
export default Cart;