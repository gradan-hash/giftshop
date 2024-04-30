import React, { useState } from "react";
import Register from "../../components/account/register";
import Login from "../../components/account/login";
import "./account.css";

function AccountPage() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  return (
    <>
      <div className="account-profile">
        <div className="account-profile-inner">
          <p className="account-my-account-p">My Account</p>

          <div className="title-account">
            <div>
              <p
                onClick={() => setIsLoginVisible(false)}
                className={!isLoginVisible ? "active" : ""}
              >
                Register
              </p>
            </div>
            <div>
              <p
                onClick={() => setIsLoginVisible(true)}
                className={isLoginVisible ? "active" : ""}
              >
                Login
              </p>
            </div>
          </div>

          <div className="account-container">
            {isLoginVisible ? <Login /> : <Register />}
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountPage;
