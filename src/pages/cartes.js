import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner.component"
import EntreeMenu from '../components/EntreeMenu.component'
import BurgerMenu from "../components/BurgerMenu.component"


const Cartes = () => (
  <Layout>
    <SEO title="Cartes" />
    <Banner />
    <EntreeMenu />
    <BurgerMenu />
  </Layout>
)

export default Cartes
