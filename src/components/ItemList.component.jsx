import React from 'react'
import Img from 'gatsby-image'

const ItemList = ({ item }) => {
  const {id, name, ingredients, price } = item
  const { fixed } = item.image

  return (
    <div className="col-md-6 mb-2 item-menu" key={id}>
      <Img fixed={fixed} alt={name}/>
      <div className="px-2">
        <h3 className="item-title">{name}</h3>
        <p>{ingredients}</p>
      </div>
      <p>{price} €</p>
    </div>
  )
}

export default ItemList