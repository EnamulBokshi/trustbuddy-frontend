import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
// import {useRev,RevProvider,RevContext} from '../contexts/reviews/UseRev'
function Review() {
  const [reviews,setReviews] = useState([]);
  const [response,setResponse] = useState([]);

  return (
    <>
      <Nav active='review'/>
        <section>
          {
            
          }
        </section>
      <Footer />
    </ >
  )
}

export default Review