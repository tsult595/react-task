import React, { useState } from 'react'
import Button from './Button'

const Banner = () => {
  const [showLess, setShowLess] = useState(false)

  function toggleShow() {
    setShowLess(prev => !prev)
  }

  return (
    <>
      <div className='banner'>We Keep Good Company</div>

      <div className={`banner ${showLess ? 'banner-max' : 'banner-min'}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          doloremque numquam natus eaque praesentium maxime perspiciatis
          exercitationem, ad quae accusantium distinctio necessitatibus
          voluptate nemo fugit Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Assumenda ab rem voluptatibus fugiat officiis option
          voluptas facere incidunt quibusdam accusantium?.
        </p>
        
      </div>
      <div className='showsBtn'>
        <Button
          onClick={toggleShow}
          className='showBtn'
          text={`${showLess ? 'Show Less' : 'Show More'}`}
        />
      </div>
    </>
  )
}

export default Banner
