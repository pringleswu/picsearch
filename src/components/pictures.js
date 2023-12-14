import React from 'react'

const Pictures = ({picture}) => {
    console.log(picture.src.large);
  return (
    <div className='pictures'>
      <div className='picture'>
        <p>作者:{picture.photographer}</p>
        <div className='imageContainer'>
            <img src={picture.src.large} alt=""/>
        </div>
        <p>
          <a target="_blank" href={picture.src.large} rel="noreferrer">
          點我下載</a>
          </p>
      </div>
    </div>
  )
}

export default Pictures;
