import React, { useState, useEffect } from 'react'
import './singleProduct.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import newRequests from '../../API/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'
import Slider from './Slider'

function SingleProduct() {
  const { id } = useParams()
  const dispatch = useDispatch()
  // const [quantity, setQuantity] = useState(1);

  const [singleproduct, setSingleProduct] = useState([]);
  // console.log(singleproduct.category);

  let categories

  if (singleproduct) {
    categories = singleproduct.category
  }

  const [load, setLoading] = useState(false)

  useEffect(() => {
    const SingleProduct = async () => {
      try {
        setLoading(true)

        const response = await newRequests.get(`/singleproducts/${id}`)

        // console.log(response.data);

        setSingleProduct(response.data)

        setLoading(false)
      } catch (err) {
        // console.log(err);

        if (err.response.status === 500) {
          toast.error('A problem with our servers, hang on')
        }
      } finally {
        setLoading(false)
      }
    }

    SingleProduct()
  }, [id])

  const phoneNumber = '+254706281524'
  const defaultMsg = encodeURIComponent(
    `I would like to order ${singleproduct.title}.`
  )

  const [relatedCategories, setRelatedcategories] = useState([])
  const [customerRequest, setcustomerRequest] = useState()

  const handlecustomerRequest = (e) => {
    setcustomerRequest(e.target.value)
  }

  useEffect(() => {
    const Fetchcategories = async () => {
      try {
        setLoading(true)

        const response = await newRequests.get(
          `getproductsbycategory/${categories}`
        )

        setRelatedcategories(response.data)

        setLoading(false)
      } catch (err) {
        // console.log(err)
        if (err.response.status === 500) {
          toast.error('A problem with our servers, hang on')
        }
      } finally {
        setLoading(false)
      }
    }

    Fetchcategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {load ? (
        <div className="load-div">
          <AiOutlineLoading3Quarters className="loading-icon" />
        </div>
      ) : singleproduct.length === 0 ? (
        <p>There are no products at the moment.</p>
      ) : (
        <section className="single-product-s">
          <div className="image-container">
            {/* <Slider
              images={singleproduct.arrimages}
              className="single-product-image-s"
            /> */}
            <img
              src={singleproduct.arrimages[0]}
              alt=""
              className="single-product-image-s"
            />
          </div>
          <div className="product-desc">
            <div className="product-price">
              <p className="actual-price">
                Ksh.{singleproduct.price.toLocaleString()}
              </p>
              <p className="status">
                Status: <span className="toggle-status">Available</span>
              </p>
              {/* 
              <div className="textarea">
                <div>
                  <label>Special Instruction?</label>
                </div>

                <div>
                  <textarea
                    rows="4"
                    cols="50"
                    onChange={handlecustomerRequest}
                    placeholder="Any additional instruction, eg. Wrap the gift, Message to be written in the gift "
                  ></textarea>
                </div>
                <div className="quantity">
                
  <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
    -
  </button>


  <span className="quantity-value">{quantity}</span>

  <button onClick={() => setQuantity(quantity + 1)}>+</button>
</div>
              </div> */}

              <div className="product-btns">
                <div className="cart-btn-div">
                  <Link to="/cart">
                    <button
                      className="add"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            productId: singleproduct._id,
                            title: singleproduct.title,
                            orderprice: singleproduct.price,
                            img: singleproduct.arrimages[0],
                            customerRequest: customerRequest || 'none',
                          })
                        )
                      }
                    >
                      Add To Cart
                    </button>
                  </Link>
                </div>

                <div className="buy-now-div">
                  <Link to="/checkout">
                    <button>Buy Now</button>
                  </Link>
                </div>
              </div>

              <div className="order-via-wa">
                <a
                  href={`https://wa.me/${phoneNumber}?text=${defaultMsg}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="wa-link"
                >
                  <button>Order via Whatsapp</button>
                </a>
              </div>
            </div>
            <div className="product-desc-s">
              <p>{singleproduct.description}</p>
            </div>
          </div>

          <div className="related-categories-s">
            <p>Related Products</p>

            {load ? (
              <AiOutlineLoading3Quarters className="loading-icon" />
            ) : relatedCategories.length === 0 ? (
              <p>No products are related to this product</p>
            ) : (
              relatedCategories.map((items) => (
                <div className="related-categories--" key={items._id}>
                  <div className="related-categories--image">
                    <img
                      src={items.arrimages[0]}
                      alt=""
                      className="image-category-s"
                    />

                    <Link
                      to={`related-product/${items._id}`}
                      className="product-link"
                    >
                      <p className="category-desc----">{items.title}</p>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      )}
    </>
  )
}

export default SingleProduct
