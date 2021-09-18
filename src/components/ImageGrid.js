import React from 'react'
import useFirestore from '../hooks/useFirestore'
import ImageGridCSS from '../css/ImageGrid.module.css'

const ImageGrid = () => {
  const { docs } = useFirestore("images")
  console.log(docs)

  return (
    <div className={ImageGridCSS.imageGrid}>
      {docs && docs.map(doc => (
        <div className={ImageGridCSS.imageDiv} key={doc.id}>
          <img src={doc.url} alt="Uploaded" />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
