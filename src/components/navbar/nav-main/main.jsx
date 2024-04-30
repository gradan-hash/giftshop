import React, { useState } from 'react'
import './main.css'
import NavbarMedia from '../nav-media/media'
import NavbarCategories from '../nav-categories/categories'
import LogoImage from '../../../images/kenyan gift.jpeg'
import { Link } from 'react-router-dom'
import { FaPhone, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function NavMain({ onSearch }) {
  const [inputValue, setInputValue] = useState('')
  const products = useSelector((state) => state.cart.products)

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSearchClick = () => {
    if (inputValue.trim()) {
      onSearch(inputValue)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleSearchClick()
    }
  }

  // const ReloadPage = () => {
  //   window.location.reload();
  // };

  return (
    <>
      <NavbarMedia />
      <nav className="main">
        <div className="main-inner">
          <div className="logo">
            <div>
              <Link to="/">
                <img src={LogoImage} alt="" className="logo-image" />
              </Link>
            </div>

            <div>
              <Link to="/" className="home-link">
                <p className="logo-title">Kenyan Gift Art And Jewelry Shop</p>
              </Link>
            </div>
          </div>

          <div className="search">
            <div className="search-input">
              <input
                type="text"
                placeholder="Search for an item"
                className="search-input--text"
                required
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
            </div>

            <div className="search-button">
              <button
                className="search-btn"
                onClick={handleSearchClick}
                disabled={!inputValue.trim()}
              >
                Search
              </button>
            </div>
          </div>

          <div className="cart-others">
            <div className="tel">
              <FaPhone className="tel-icon" />
              <a href="tel:+254706281524" className="tel-a">
                +254706281524
              </a>
            </div>

            <div className="cart">
              <div className="cart--">
                <Link to="/cart">
                  <FaShoppingCart className="shopping" />
                </Link>
              </div>

              <div className="quantity">
                <p className="quantity-num">
                  <span>{products.length ? products.length : '0'}</span>
                </p>
              </div>
            </div>

            <div className="account">
              <div className="account--">
                <FaUser className="user" />
              </div>

              <div className="login-reg">
                <Link to="/account" className="account-p">
                  <p className="account-options">Login</p>
                </Link>
                <Link to="/account" className="account-p">
                  <p className="account-options">Register</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <NavbarCategories />
    </>
  )
}

export default NavMain
