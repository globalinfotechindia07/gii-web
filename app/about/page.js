import React from 'react'
import About from './About'
import Map from './Map'
import DigitalIndia from './DigitalIndia'
import Value from './Value'
import { title } from 'node:process'

function page() {
  return (
    <div>
      <title>About Us - GII</title>
    <About/>
    <DigitalIndia/>
    <Value/>
    <Map/>

    </div>
  )
}

export default page
