import React from "react"
import Header from "./components/Header/Header"
import {Link} from "react-router-dom"

const About = () => {
  return (
    <div style={{padding: "20px 40px"}}>
      <Header/>
      About Company
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default About