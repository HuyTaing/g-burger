import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import SectionTitle from '../components/SectionTitle.component'
import ItemList from './ItemList.component'

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

const BurgerMenu = () => {
  const data = useStaticQuery(dataBurgers)
  const burgers = data.items.edges

  return (
    <section className="container-fluid py-3 py-md-5">
      <SectionTitle title="Nos burgers" />
      <div className="container py-3 py-md-5">
        <div className="row">
          {burgers.map(burger => 
            <ItemList item={ burger.node } key={burger.node.id} />
          )}
        </div>
      </div>
    </section>
  )
}

export default BurgerMenu