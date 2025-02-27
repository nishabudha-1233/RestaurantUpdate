import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const onchangeHandler = event => {
    const {id, value} = event.target
    if (id === 'username') {
      setUsername(value)
    } else {
      setPassword(value)
    }
  }

  const onSubmitSuccess = jwtToken => {
    const {history} = props

    Cookies.set('jwt_token', jwtToken, {
      expires: 1,
    })
    history.replace('/')
  }

  const onSubmitFailure = errorMsgs => {
    setErrorMsg(errorMsgs)
  }

  const submitForm = async event => {
    event.preventDefault()

    // if (username.trim() === '' || password.trim() === '') {
    //   setErrorMsg('Username and password cannot be empty.')
    //   return
    // }

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.status === 200) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  if (Cookies.get('jwt_token')) {
    return <Redirect to="/" />
  }

  //   onChangeUsername = event => {
  //     this.setState({username: event.target.value})
  //   }

  //   onChangePassword = event => {
  //     this.setState({password: event.target.value})
  //   }

  //   renderPasswordField = () => {
  //     const {password} = this.state

  //     return (
  //       <>
  //         <label className="input-label" htmlFor="password">
  //           PASSWORD
  //         </label>
  //         <input
  //           type="password"
  //           id="password"
  //           className="password-input-field"
  //           value={password}
  //           onChange={this.onChangePassword}
  //           placeholder="Password"
  //         />
  //       </>
  //     )
  //   }

  //   renderUsernameField = () => {
  //     const {username} = this.state

  //     return (
  //       <>
  //         <label className="input-label" htmlFor="username">
  //           USERNAME
  //         </label>
  //         <input
  //           type="text"
  //           id="username"
  //           className="username-input-field"
  //           value={username}
  //           onChange={this.onChangeUsername}
  //           placeholder="Username"
  //         />
  //       </>
  //     )
  //   }

  return (
    <div className="login-form-container">
      {/* <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-img"
          alt="website login"
        /> */}
      <form className="form-container" onSubmit={submitForm}>
        <h1>Login</h1>
        <label htmlFor="username">USERNAME</label>
        <input
          id="username"
          type="text"
          onChange={onchangeHandler}
          value={username}
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          type="password"
          onChange={onchangeHandler}
          value={password}
        />

        <button type="submit" className="login-button">
          Login
        </button>
        {errorMsg && <p className="error-message">{errorMsg}</p>}
      </form>
    </div>
  )
}

export default Login
