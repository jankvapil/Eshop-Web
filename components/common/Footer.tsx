import React from 'react'

///
/// Footer component
///
const Footer = () => {

  const styles = {
    container: {
      // padding: '50px 0 50px 0',
      margin: 'auto',
      width: 1000,
      minHeight: 200,
    },
    info: {
      margin: 'auto',
      width: 200,
      paddingTop: 80,
    }
  }

  return (
    <div
      style={{
        width: '100%',
        float: 'left'
      }}
    >
      <div className="Footer" style={ styles.container }>
        <div style={styles.info}>
          <p style={{textAlign: 'center'}}>Created by <br /> jkvapil6@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
