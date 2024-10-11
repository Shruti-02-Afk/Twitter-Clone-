import React from 'react'
import "./App.css";
const App = () => {
  return (
    <div className='app'>
      <div className="logoBox">
        <img src="./twitter.png" alt='logo' className='twitterLogo' />
        <h1 className='headTwit'>Sign in to Twitter</h1>

        <button>
          <img src='./google.png' alt='logo' />
          Sign in with Google
        </button>

        <button>
          <img src='./apple.png' alt='logo' />
          Sign in with Apple
        </button>
        <hr></hr>
        <span>Or</span>

        <form>
          <input type='text' placeholder='Phone email or username' />
          <button>Next</button>
        </form>

        <button>Forget Password</button>
        <p>Don't have an account<a>Sign Up</a></p>
      </div>
    </div>
  )
}

export default App
