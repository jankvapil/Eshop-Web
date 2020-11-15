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
        {/* <link rel="icon" href="/favicon.ico" /> */}
     </Head>

      
      <div 
        className="App" 
        style={{
          margin: 'auto',
          width: 1000,
          // outline: 'red solid 1px',
        }}
      >
        <Header />
        
        <Navbar />
        { props.children }
      </div>
      <Footer />
    </div>
  )
}

export default Layout