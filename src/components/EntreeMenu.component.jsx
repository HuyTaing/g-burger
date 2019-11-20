import React from 'react'
import { graphql , StaticQuery } from 'gatsby'

import SectionTitle from '../components/SectionTitle.component'
import ItemList from '../components/ItemList.component'

const dataEntree = graphql`{
	items: allContentfulEntrees{
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

const EntreeMenu = () => {
  return (
    <section className="container-fluid py-3 py-md-5">
      <SectionTitle title="Nos entrées" />
      <div className="container py-3 py-md-5">
        <div className="row">
          <StaticQuery 
            query={ dataEntree } 
            render={ data => {
              return data.items.edges.map(entree => {
                return <ItemList item={ entree.node } key={ entree.node.id}/>
              })
            }
          } />
        </div>
      </div>
    </section>
  )
}

export default EntreeMenu