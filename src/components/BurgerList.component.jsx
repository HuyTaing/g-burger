import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const dataBurgers = graphql`
{
	items:allContentfulBurgers{
    edges{
      node{
        id
        name
        ingredients
        price
        image{
          fixed(width:100, height: 100){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}`

const BurgerList = () => {
  const data = useStaticQuery(dataBurgers)
  const burgers = data.items.edges
  
  return (
    <div className="container py-5">
      <div className="row">
      {burgers.map(burger => {
        const { id, name, ingredients, price } = burger.node
        const { fixed } = burger.node.image
        return (
          <div className="col-md-6 mb-2 burger-menu" key={id}>
            <Img fixed={fixed} />
            <div className="px-2">
              <h3 className="burger-title">{name}</h3>
              <p>{ingredients}</p>
            </div>
            <p>{price} €</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default BurgerList