import React from 'react'
import Galleries from '../constant/gallery'

const Gallery = () => {
  return(
    <section className="gallery container-fluid">
      <div className="row">
          {Galleries.map( gallery => {
            return(
              <div className="col-sm-6 col-md-3 px-0" key={gallery.id}>
                <img src={gallery.item} alt={gallery.text} className="img-fluid gallery-image"/>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Gallery