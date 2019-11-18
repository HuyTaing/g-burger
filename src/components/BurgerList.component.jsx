import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
        // console.log(burger)
        return (
          <div className="col-md-6 mb-2 burger-menu" key={burger.node.id}>
            <img src={burger.node.image.fixed.src} alt={burger.node.name} className="img-fluid"/>
            <div className="px-2">
              <h3 className="burger-title">{burger.node.name}</h3>
              <p>{burger.node.ingredients}</p>
            </div>
            <p>{burger.node.price} €</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default BurgerList