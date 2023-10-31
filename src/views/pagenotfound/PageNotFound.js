import React from 'react'
import { Link } from 'react-router-dom'
import "./PageNotFound.css"

export const PageNotFound = () => {
  return (
    <div class="card main-card" style={{marginLeft:"20%"}}>
    <div class="pagenotfound">
      <h1>404   <h6>Page Not Found.</h6> </h1>
    
     <br/>
     <Link to="/"><h6>Go To HomePage!</h6></Link> 
    </div>
  </div>
  )
}
