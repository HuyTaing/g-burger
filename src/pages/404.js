import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container error">
      <h1>Désolé, cette page n'est pas disponible</h1>
    </div>
  </Layout>
)

export default NotFoundPage
