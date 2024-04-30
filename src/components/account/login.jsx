import React, { useState, useContext } from 'react'
import './register.css'
import { IoMdPerson } from 'react-icons/io'
import { TbPasswordUser } from 'react-icons/tb'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { LogContext } from '../../context/logContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cookies from 'js-cookie'
import axios from 'axios'
import newRequests from '../../API/api'

function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [load, setLoad] = useState(false)
  const [errMsg, seterrMsg] = useState()
  const { user, loading, error, dispatch } = useContext(LogContext)

  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePwd = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      toast.error('Please fill all the fields')
    }

    setLoad(true)

    dispatch({ type: 'logStart' })

    try {
      const LoginData = {
        email: email,
        password: password,
      }

      const response = await newRequests.post('/login', LoginData)

      // console.log(response)

      dispatch({ type: 'logComplete', payload: response.data })

      toast.success('Login Successful')

      setTimeout(() => {
        navigate('/')
      }, 1000)

      setLoad(false)
    } catch (err) {
      // console.log(err)
      dispatch({ type: 'logFail', payload: err })

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (password.length < 5) {
        toast.error(
          'Password is too short. Please enter at least 5 characters.'
        )
        setLoad(false)

        return
      } else if (!emailRegex.test(email)) {
        toast.error('Invalid email address. Please enter a valid email.')
        setLoad(false)

        return
      } else {
        seterrMsg('Invalid Credetials!')

        toast.error(errMsg)
        setLoad(false)
      }
    } finally {
      setLoad(false)
    }
  }

  return (
    <>
      <section className="login">
        <div className="login-inner">
          <form onSubmit={handleLogin}>
            <div className="username">
              <IoMdPerson className="person" />

              <input
                type="email"
                placeholder="Your Email Address"
                required
                className="input-mail"
                value={email}
                onChange={handleEmail}
              />
            </div>

            <div className="password-input">
              <TbPasswordUser className="person" />

              <input
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="Your Password"
                required
                className="input-mail"
                value={password}
                onChange={handlePwd}
              />

              <div onClick={togglePasswordVisibility} className="eye-icon">
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className="login-btn">
              <button className="btn">
                {load ? (
                  <AiOutlineLoading3Quarters className="loading-icon" />
                ) : (
                  'Login'
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
