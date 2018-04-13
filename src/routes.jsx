import React from 'react'
import { Route, Link } from 'react-router-dom'

import Hello from './hello/components/home'
import LoginForm from './login/components/LoginForm'
import RegisterForm from './register/components/Register'
import ForgotPassword from './forgotPassword/components/ForgotPassword'

const Home = (props) => {
  console.log(props.match.params.arg1)
  return <div>
    <div>Home</div>
    <Link to='/login'>Login</Link>
  </div>
}

export default () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/test/:arg1' component={Home} />
      <Route exact path='/hello' component={Hello} />
    </div>
  )
}
