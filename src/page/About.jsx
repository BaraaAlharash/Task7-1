// import React from 'react'
import { Brands } from '../components/Brands/Brands'
import Hero2 from '../components/Hero2/Hero2'
import { NavBar } from '../components/NavBar/NavBar'

function About() {
  return (
    <>
      <NavBar
        myclass = {false}
      />
      <Hero2
        tittle = "About Us"
        subTittle = "AboutUs"
      />
      <Brands
        brand = {false}
      />
    </>
  )
}

export default About