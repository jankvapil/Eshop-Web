import React from 'react'

///
/// Footer component
///
const Footer = () => {

  const styles = {
    container: {
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
    <div className="Footer" style={ styles.container }>
      <div style={styles.info}>
        <p style={{textAlign: 'center'}}>Created by <br /> jkvapil6@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
