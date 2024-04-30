import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";
function NavCategories() {
  return (
    <>
      <nav className="nav-categories">
        <div className="categories">
          <div className="categories--">
            <div>
              <Link to="/gifts" className="categories-links">
                <p className="categories-p">Gift Hampers</p>
              </Link>
            </div>
            <div>
              <Link to="/arts" className="categories-links">
                <p className="categories-p">Arts</p>
              </Link>
            </div>
            <div>
              <Link to="/jewelry" className="categories-links">
                {" "}
                <p className="categories-p">Jewelry</p>
              </Link>
            </div>
            <div>
              <Link to="/flowers" className="categories-links">
                {" "}
                <p className="categories-p">Flowers</p>
              </Link>
            </div>
            <div>
              <Link to="/watches" className="categories-links">
                {" "}
                <p className="categories-p">Watches</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavCategories;
