import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import img1 from '../images/Homepage introducing image.png-1.png'

function Home() {
  return (
    <DefaultLayout>
        <div className='middle-img'>
          <img 
          src={img1}
          />
        </div>
      
    </DefaultLayout>
  )
}

export default Home