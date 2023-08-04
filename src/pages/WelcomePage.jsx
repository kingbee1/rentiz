import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const WelcomePage = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome Home</h1>
      <div>
        <button>Buying</button><button>Sellling</button>
      </div>
      <Footer />
    </div>
  )
}

export default WelcomePage
