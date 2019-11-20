import React from 'react'
import SectionTitle from './SectionTitle.component'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const dataImage = graphql`{
	fluid: file(relativePath : { eq: "burger-spe.jpg"}){
    childImageSharp{
      fluid(maxWidth: 800){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`


const Specialite = () => {
  const image = useStaticQuery(dataImage)
  // console.log(image)

  return (
    <section className="specialite">
      <SectionTitle title="Notre specialité"/>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-3 mb-sm-0">
            <Img fluid={image.fluid.childImageSharp.fluid}/>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center text-center">
            <h3>Venez savourer notre fameux <br/> G-burger</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus neque quas ipsam quia quisquam, nemo deleniti, est minus non laboriosam in corporis sunt natus voluptatem numquam cum, vitae eos?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specialite