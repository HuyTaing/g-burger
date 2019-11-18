import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import Hero from '../components/Hero.component'
import Specialite from '../components/specialite.component'
import Gallery from '../components/Gallery.component'

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
    <Hero />
    <Specialite />
    <Gallery />
  </Layout>
)

export default IndexPage
