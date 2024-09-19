import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa';

export default function GalleryContent({images}) {
  return (
    <>
     <div className="container card p-4 pb-0 my-4">
      <div className="row justify-content-between">
        {images.map((image, index) => (
          <GalleryImg image={image}  key={index}/>
        ))}
      </div>
    </div>
    </>
  )
}


function GalleryImg({image}) {
    const[like ,setlike] = useState("true")

    const isLike =()=>{
        setlike(!like);
    }

    return(
        <div className="col-3 mb-4">
            <div className="image-container">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid"
                style={{ width: '222px', height: '221px', objectFit: 'cover' }}
              />
              <div className="overlay">
                  <FaHeart onClick={isLike} className={`${like ? 'text-white' : 'text-danger'} fs-3"`} role='button' />
              </div>
            </div>
          </div>
    )
}