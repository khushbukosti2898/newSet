import React from 'react';

const Login = () => {
  return <div className="mt-4 login">
    <form>
      <div className="d-flex">
        <label className="form-label">User Name</label>
        <input className="w-25" type="text" placeholder="Enter Username" name="username" required />
      </div>
      <div className="d-flex my-3">
        <label className="form-label">Password</label>
        <input className="w-25" type="password" placeholder="Enter Password" name="password" required />
      </div>
      <div className="d-flex my-3 justify-content-start">
        <label className="form-label">Remember me</label>
        <input type="checkbox" name="rememberMe" />
      </div>
      <button type="submit" className="button py-1 px-2 login-btn font-weight-bold">&gt; Log in</button>
    </form>
    <ul className="mt-4 ref-link">
      <li className="pb-1">
        <a href="/"> Forgot your password?</a>
      </li>
      <li className="pb-1">
        <a href="/"> Forgot your username?</a>
      </li>
    </ul>
  </div>
}

export default Login;