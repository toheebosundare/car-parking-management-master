import React from 'react'

// components
import Hero from './Hero'
import FlexItems from './FlexItems'
import FlexColumns from './FlexColumns'
import Footer from '../../components/Footer'
import FlexIcons from './FlexIcons'
import FlexColumns_ from './FlexColumns_'

export default function Home() {
  return (
      <div>
        <Hero />
        <FlexItems />
        <FlexColumns />
        <FlexIcons />
        <FlexColumns_ />
        <Footer />
      </div>
  )
}
