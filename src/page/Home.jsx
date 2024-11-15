// import React from 'react'
import { Brands } from '../components/Brands/Brands'
import FirstHero from '../components/FirstHero/FirstHero'
import { NavBar } from '../components/NavBar/NavBar'

function Home() {
  return (
    <>
      <NavBar
        myclass = {true}
      />
      <FirstHero/>
      <Brands
        brand = {true}
      />
    </>
  )
}

export default Home