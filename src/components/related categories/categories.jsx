import React, { useState, useEffect } from "react";
import "./categories.css";
// import Dummy from "../../images/dummyImage.webp";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import newRequests from "../../API/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function RelatedProduct() {
  const { id } = useParams();
  // console.log(id);

  const [singleproduct, setSingleProduct] = useState([]);
  // console.log(singleproduct.category)

  let categories;

  if (singleproduct) {
    categories = singleproduct.category;
  }

  // console.log(categories)

  const [load, setLoading] = useState(false);

  useEffect(() => {
    const SingleProduct = async () => {
      try {
        setLoading(true);

        const response = await newRequests.get(`/singleproducts/${id}`);

        // console.log(response.data);

        setSingleProduct(response.data);

        setLoading(false);
      } catch (err) {
        // console.log(err);

        if (err.response.status === 500) {
          toast.error("A problem with our servers, hang on");
        }
      } finally {
        setLoading(false);
      }
    };

    SingleProduct();
  }, [id]);

  const phoneNumber = "+254706281524";
  const defaultMsg = encodeURIComponent(
    `I would like to order ${singleproduct.title}.`
  );

  return (
    <>
      {load ? (
        <div className="load-div">
          <AiOutlineLoading3Quarters className="loading-icon" />
        </div>
      ) : singleproduct.length === 0 ? (
        <p>There are no products at the moment.</p>
      ) : (
        <section className="single-product">
          <div className="image-container-categories">
            <img
              src={singleproduct.arrimages[0]}
              alt="single-product-image"
              className="single-product-image"
            />
          </div>

          <div className="product-desc-categories">
            <div className="product-desc--">
              <p>{singleproduct.description}</p>
            </div>

            <div className="product-price">
              <p className="actual-price">
                Ksh.{singleproduct.price.toLocaleString()}
              </p>
              <p className="status">
                Status: <span className="toggle-status">Available</span>
              </p>

              <div className="textarea">
                <div>
                  <label>Special Instruction?</label>
                </div>

                <div>
                  <textarea
                    rows="4"
                    cols="50"
                    placeholder="Any additional instruction, eg. Wrap the gift, Message to be written in the gift "
                  ></textarea>
                </div>
              </div>

              <div className="product-btns">
                <div className="cart-btn-div">
                  <Link to="/cart">
                    <button>Add To Cart</button>
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
          </div>
        </section>
      )}
    </>
  );
}

export default RelatedProduct;
