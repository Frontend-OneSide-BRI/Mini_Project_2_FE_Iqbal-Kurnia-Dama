import React from 'react'
import Navbar from '../components/Navbar'
import Parallax from '../components/Parallax'
import Galleries from '../components/Gallery'
import Footer from '../components/Footer'

const gallery = () => {
  return (
    <>
      {/* navbar */}
      <section>
        <Navbar />
      </section>
      {/* hero  */}
      <section>
        <Parallax />
      </section>
      {/* gallery */}
      <section>
        <Galleries />
      </section>
      {/* footer */}
      <section>
        <Footer />
      </section>
    </>
  )
}

export default gallery