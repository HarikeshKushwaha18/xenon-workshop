import React from 'react'
import styles from '../header/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}
    // style={{ backgroundImage: `url(${headerImage})` }}
    >
        <div className={styles.headerContents}>
            <h2>Digital Transformation Cunslting Services And Solutions Company</h2>
            <p>Tailored and trusted enterprise-ready solution based on the use of your data with reliable outputs driving and scaling business transformation.</p>
            <button>Transform Now</button>
        </div>

    </div>
  )
}

export default Header