import React from 'react'
import Validate from "../validation/validate"
import DataFetch from "../dataFetch"
import Header from "../header/index"

const Home = () => {
  return (
    <>
      <Validate/>
      <Header/>
      <DataFetch/>
    </>
  )
}

export default Home