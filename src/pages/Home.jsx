import React from 'react'
// import NewFood from '/components/NewFood'
import NewFood from '../components/NewFood'
import RecommendedFood from '../components/RecommendedFood'
import Service from '../components/Service'
import Service2 from '../components/Service2'
import Header from '../components/Header'
import Special from '../components/Special'

const Home = () => {
  return (
    <>
    <Header/>
    <RecommendedFood/>
    <Service/>
    <NewFood/>
    <Service2/>
    <Special/>
    </>
  )
}

export default Home