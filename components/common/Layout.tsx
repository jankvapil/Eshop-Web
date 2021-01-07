import Head from 'next/head'

import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

///
/// Layout Component
///
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Eshop</title>
     </Head>

      <div 
        className="App" 
        style={{
          margin: 'auto',
          width: 1000,
        }}
      >
        <Header />
        <Navbar />
        <div
          style={{
            marginTop: 60
          }}
        >
          { props.children }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout