import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuSkipBack } from "react-icons/lu";
import { LuSkipForward } from "react-icons/lu";
import { FaArrowCircleUp } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import newRequests from "../../API/api";

function Jewelry({ searchTerm }) {
  // console.log(searchTerm);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  let query = "jewelery";

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await newRequests.get(
          `/getproductsbycategory/${query}`
        );
        // console.log(response);
        setLoading(false);
        setProducts(response.data);
      } catch (err) {
        // if (err.response.status === 500) {
        //   toast.error('A problem with our servers, hang on')
        // }
      } finally {
        setLoading(false);
      }
    };
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    const SearchProduct = async () => {
      try {
        setLoading(true);

        if (searchTerm) {
          const response = await newRequests.get(
            `/searchproducts/${searchTerm}`
          );
          setSearchProducts(response.data);
        } else {
          setSearchProducts([]);
        }

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

    SearchProduct();
  }, [searchTerm]);

  //   const [sort, setSort] = useState();
  //   const [sortedProducts, setsortedProducts] = useState([]);

  //   console.log(sort)

  //   const handleSort = (e) => {
  //     setSort(e.target.value);
  //   };

  //   useEffect(() => {
  //     if (sort) {
  //       const sortProducts = async () => {
  //         try {
  //           setLoading(true);
  //           const response = await newRequests.get(`/getproducts/${sort}`);
  //           // console.log(response)
  //           setsortedProducts(response.data);
  //           setLoading(false);
  //         } catch (err) {
  //           // console.log(err)
  //           if (err.response.status === 500) {
  //             toast.error("A problem with our servers, hang on");
  //           }
  //         } finally {
  //           setLoading(false);
  //         }
  //       };

  //       sortProducts();
  //     }
  //   }, [sort]);

  const itemsPerPage = 50;
  const [currentPage, setCurrentPage] = useState(1);
  const productsToDisplay = searchTerm ? searchProducts : products;

  const totalPages = Math.ceil(productsToDisplay.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productsToDisplay.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <section className="body">
        <div className="body-inner">
          {/* <div className="sort">
            <select
              name="sortOptions"
              id="sortOptions"
              onChange={handleSort}
              value={sort}
            >
              <option value="" selected disabled>
                Sort
              </option>
              <option value="latest">Sort by Latest</option>
              <option value="highestPrice">Sort by Highest Price</option>
              <option value="lowestPrice">Sort by Lowest Price</option>
              <option value="Rating">Sort by Rating</option>
            </select>
          </div> */}

          <div className="products">
            <div className="actual-products">
              {loading ? (
                <div className="load-div">
                  <AiOutlineLoading3Quarters className="loading-icon" />
                </div>
              ) : currentItems.length === 0 ? (
                <p>
                  {searchTerm
                    ? "There are no products that matched your search"
                    : "There are no products at the moment."}
                </p>
              ) : (
                <div className="prod-list-wrapper">
                  {currentItems.map((product) => (
                    <Link
                      to={`single-product/${product._id}`}
                      className="product-link"
                      title={product.title}
                    >
                      <div className="product" key={product._id}>
                        <div className="product-image-wrapper">
                          <img
                            src={product.arrimages[0]}
                            alt="Product"
                            className="product-image"
                          />
                        </div>
                        <p className="product-p">{product.title}</p>
                        <p className="price">
                          Ksh. {product.price.toLocaleString()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pagination">
              <div className="back" onClick={goToPrevPage}>
                <LuSkipBack
                  className={`arrow-back ${
                    currentPage === 1 ? "disabled" : ""
                  }`}
                />
              </div>

              <div>
                <p className="page-number">{currentPage}</p>
              </div>

              <div className="back" onClick={goToNextPage}>
                <LuSkipForward
                  className={`arrow-back ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="back-top">
            <FaArrowCircleUp className="arrow-top" onClick={scrollToTop} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Jewelry;
