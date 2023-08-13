import React from 'react'
import Main from '../Components/Main'
import request from '../Components/Request'
import Row from '../Components/Row'


function Home() {
  return (
    <div className=' h-screen w-full '>
      <Main/>
      <Row title="Tranding" fetchURL={request.requestTranding}/>
      <Row title="TopRated" fetchURL={request.requestTopRated}/>
      <Row title="Popular" fetchURL={request.requestPopular}/>
      <Row title="Horror" fetchURL={request.requestHorror}/>
    </div>
  )
}

export default Home
