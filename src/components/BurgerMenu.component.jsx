import React from 'react'
import SectionTitle from '../components/SectionTitle.component'
import BurgerList from '../components/BurgerList.component'

const BurgerMenu = () => {
  return (
    <section className="container-fluid py-5">
      <SectionTitle title="Nos burgers" />
      <BurgerList />
    </section>
  )
}

export default BurgerMenu