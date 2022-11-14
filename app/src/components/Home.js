import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  
  return (
    <>
    <div className="row">
        <div className="col-6 pt-5">
          <h2 style={{"fontSize":"24px","fontWeight":"300","width":"600px","lineHeight":"40px","marginLeft":"20px","marginTop":"80px"}} >Order food from favourite restaurants near you.</h2>
          <Link to="/search"><div className="container"  style={{"marginLeft":"180px","marginTop":"40px"}}><button className='btn btn-outline-secondary '>Find Your Food</button></div></Link>
        </div>
        <div className="col-6" ><img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq' alt='' style={{"height":"100vh","width":"50vw","objectFit":"scale-down","maxWidth":"100%  "}}/></div>
    </div>
    </>
  )
}

export default Home