import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import About from '../components/About'
import TopPhotography from '../components/TopPhotography'
import Footer from '../components/Footer'
import ExamplePhoto from '../components/ExamplePhoto'

const index = () => {
  return (
    <>
      {/* navbar */}
      <section>
        <Navbar />
      </section>
      {/* carousel */}
      <section>
        <Carousel />
      </section>
      {/* About */}
      <section>
        <About />
      </section>
      {/* top photography */}
      <section>
        <div >
          <TopPhotography />
        </div>
      </section>
      {/* example photo */}
      <section>
        <ExamplePhoto />
      </section>
      {/* footer */}
      <section>
        <Footer />
      </section>
    </>
  )
}

export default index