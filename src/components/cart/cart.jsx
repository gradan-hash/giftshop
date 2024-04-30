import React, { useState } from 'react'
import './cart.css'
import { useSelector } from 'react-redux'
import newRequests from '../../API/api'
import { removeItem, resetCart } from '../../redux/cartReducer'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

function Cart() {
  const [products, setProducts] = useState(
    useSelector((state) => state.cart.products)
  )
  console.log('total', products)
  const [quantity, setQuantity] = useState(1)
  const [deliveryLocation, setDeliveryLocation] = useState('')

  const truncateText = (text, numWords) => {
    if (!text) {
      return '' // or handle the case accordingly
    }
    const words = text.split(' ')
    const truncatedText = words.slice(0, numWords).join(' ')
    return truncatedText + (words.length > numWords ? '...' : '')
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  const handleDeliveryLocationChange = (e) => {
    setDeliveryLocation(e.target.value)
  }

  const items = products.map((product) => ({
    _id: product.productId,
    orderPrice: product.orderprice,
    customerRequest: product.customerRequest,
    deliveryLocation: deliveryLocation,
    quantity: quantity,
  }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await newRequests.post('/mpesa/stk', { products: items })
      toast.success(res.data.message)
      setProducts([])
    } catch (error) {
      // console.log(error)
      toast.error('Payment not Completed: Retry!')
    }
  }

  const dispatch = useDispatch()

  function calculateTotalPrice() {
    return products.reduce((total, product) => {
      return total + product.orderprice * quantity
    }, 0)
  }

  return (
    <>
      <section className="add-to-cart">
        <div className="add-to-cart-container">
          {products.map((product) => (
            <div key={product.productId} className="add-to-cart-cont---">
              <div className="cart-image-container">
                <img src={product.img} alt="" className="cart-image" />
              </div>

              <div className="cart-details">
                <div className="cart-item-desc">
                  <p>{truncateText(product.title, 2)}</p>
                </div>

                <div className="cart-item-price">
                  <p>
                    Unit Price:{' '}
                    <span className="actual-price-cart">
                      Ksh. {product.orderprice}{' '}
                    </span>
                  </p>
                </div>

                <div className="cart-item-increment">
                  <input
                    type="number"
                    placeholder="how many items do you want?"
                    min="1"
                    step="1"
                    onChange={handleQuantityChange}
                  />
                </div>

                <div className="cart-item-totalprice">
                  <p>
                    Total Price:{' '}
                    <span className="total-price-cart-span">
                      Ksh. {product.orderprice}
                    </span>
                  </p>
                </div>

                <div className="remove-item">
                  <button
                    onClick={() => dispatch(removeItem(product.productId))}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="shipping">
            <div className="clear">
              <button onClick={() => dispatch(resetCart())}>Clear Cart</button>
            </div>

            <div className="shipping-details">
              <p className="shipping-details-p">Delivery Location</p>

              <div className="state-details">
                <input
                  type="text"
                  placeholder="Delivery Location"
                  className="deliveryLocation"
                  onChange={handleDeliveryLocationChange}
                />

                <p className="or">OR</p>

                <div className="cb">
                  <input type="checkbox" />
                  <p>Collect from store</p>
                </div>
              </div>

              <div className="shipping-btn">
                <button className="okay-btn">Okay</button>
              </div>
            </div>

            <div className="actual-checkout">
              {/* <p className="st">
                SubTotal: <span className="sub-total">Ksh.00000</span>
              </p> */}

              <p className="st">
                Shipping To: {deliveryLocation || 'weka details'}
              </p>

              {/* <p className="st">Shipping Fee:</p> */}

              <p className="st">
                Total:{' '}
                <span className="total--price---">
                  Ksh.{calculateTotalPrice()}
                </span>
              </p>

              <div className="checkout-cont-proceed">
                <button onClick={handleSubmit}>Pay via M-pesa</button>
                {/* <Link to="/checkout">
                  <button onSubmit={handleSubmit}>Proceed To Checkout</button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
