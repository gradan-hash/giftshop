import React, { useState, useEffect, useContext } from "react";
import "./register.css";
import { IoMdPerson } from "react-icons/io";
import { TbPasswordUser } from "react-icons/tb";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { RegContext } from "../../context/regContext";
import { AiOutlineEye, AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
import { MdMailOutline } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import newRequests from "../../API/api";
function Register() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const [errormsg, setErrormsg] = useState();

  const { user, loading, error, dispatch } = useContext(RegContext);

  const handleName = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleTel = (e) => {
    setTel(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const phoneNumberRegex = /^07\d{8}$/;

    if (!username || !email || !tel || !password) {
      toast.error("Please fill in all the fields");
      return;
    }

    if (!phoneNumberRegex.test(tel)) {
      toast.error("Invalid phone number. It should start with 07 and be 10 digits long.");
      return;
    }

    setLoad(true);

    dispatch({ type: "regStart" });

    try {
      const registrationData = {
        username: username,
        email: email,
        password: password,
        phonenumber: tel,
      };

      const response = await newRequests.post("/register", registrationData);

      // console.log(response)

      dispatch({ type: "regComplete", payload: response.data });

      toast.success("Registration Successful,Click the login text");

      setLoad(false);
    } catch (err) {
      // console.log(err)

      dispatch({ type: "regFail", payload: err });
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (password.length < 5) {
        toast.error(
          "Password is too short. Please enter at least 5 characters."
        );
        setLoad(false);

        return;
      } else if (!emailRegex.test(email)) {
        toast.error("Invalid email address. Please enter a valid email.");
        setLoad(false);

        return;
      } else {
        setErrormsg(
          "There seems to be an error, refresh the page and try again!"
        );

        toast.error(errormsg);
        setLoad(false);
      }
    } finally {
      setLoad(false);
    }
  };

  return (
    <>
      <section className="login">
        <div className="login-inner">
          <form onSubmit={handleRegistration}>
            <div className="username">
              <IoMdPerson className="person" />

              <input
                type="text"
                placeholder="Username"
                className="input-mail"
                required
                value={username}
                onChange={handleName}
              />
            </div>

            <div className="username">
              <MdMailOutline className="person" />

              <input
                type="email"
                placeholder="Your Email Address"
                className="input-mail"
                required
                value={email}
                onChange={handleEmail}
              />
            </div>

            <div className="username">
              <BsTelephoneFill className="person" />

              <input
                type="tel"
                placeholder="Your Phone number"
                className="input-mail"
                required
                value={tel}
                onChange={handleTel}
              />
            </div>

            <div className="password-input">
              <TbPasswordUser className="person" />

              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Your Password"
                className="input-mail"
                required
                value={password}
                onChange={handlePassword}
              />

              <div onClick={togglePasswordVisibility} className="eye-icon">
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className="login-btn">
              <button className="btn">
                {" "}
                {load ? (
                  <AiOutlineLoading3Quarters className="loading-icon" />
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
