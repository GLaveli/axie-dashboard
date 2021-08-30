import React, { useState, useCallback } from 'react'
import { useAuth } from '../../context/AuthContext';
import { Wrapper, Left, Right, Signin, Showcase, MainFooter } from './styles';

// import './styles.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    await signIn({ username, password })
  }, [username, password],
  )

  return (
    <Wrapper >

      <Left>

        <Signin>

          <div className="logo">
            <img src="https://image.ibb.co/hW1YHq/login-logo.png" alt="Sluralpright" />
          </div>

          <form onSubmit={handleSubmit}>

            <div>
              <label>Email or username</label>
              <input type="text" className="text-input" onChange={e => setUsername(e.target.value)} />
            </div>

            <div>
              <label>Password</label>
              <input type="password" className="text-input" onChange={e => setPassword(e.target.value)} />
            </div>

            <button type="submit" className="primary-btn">Sign In</button>
          </form>

          <div className="links">
            <a href="/">Forgot Password</a>
            <a href="/">Sign in with company or school</a>
          </div>

          <div className="or">
            <hr className="bar" />
            <span>OR</span>
            <hr className="bar" />
          </div>

          <a href="/" className="secondary-btn">Create an account</a>

        </Signin>

        <MainFooter>
          <p>Copyright &copy; 2018, Sluralpright All Rights Reserved</p>
          <div>
            <a href="/">terms of use</a> | <a href="/">Privacy Policy</a>
          </div>
        </MainFooter>

      </Left>

      <Right>

        <Showcase>

          <div className="showcase-content">

            <h1 className="showcase-text">
              Let's create the future <strong>together</strong>
            </h1>

            <a href="/" className="secondary-btn">Start a FREE 10-day trial</a>

          </div>
        </Showcase>

      </Right>
    </Wrapper>
  )
};

export default Login;