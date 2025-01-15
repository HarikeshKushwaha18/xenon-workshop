import React from 'react'
import styles from '../form/Forms.module.css'
const Form = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.heading}><span className={styles.color}>Request</span> for Services</div>
            <p className={styles.para}>Find out more about How your Enterprise can Streamline Data Operations and enable effective Management</p>
        </div>
        {/* form will be here */}
        <div className={styles.right}>

        </div>
    </div>
  )
}

export default Form