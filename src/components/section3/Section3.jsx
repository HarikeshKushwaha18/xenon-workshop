import React from 'react'
import img from '../../assets/protect.PNG'
import styles from '../section3/Section3.module.css'

const Section3 = () => {
 
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h3>Protect performance, optimize spend and simplify operations</h3>
            <p>AIOps solutions delivers one of the most complete and integrated set of modular automation technologies. See how you can use artificial intelligence for more efficient IT operations and redesign IT DevOps and CloudOps. Using our aiops tools for enterprise observability, automated operations and incident management, customers have achieved new levels of performance, such as:</p>
            <ul>
                <li>33% less public cloud consumption spend</li>
                <li>50% less mean time to repair (MTTR)</li>
                <li>Up to 470% ROI in under six months</li>
                <li>99.99% application availability</li>
            </ul>
        </div>
        <div className={styles.right}>
                <img className={styles.image} src={img} alt="" />
        </div>
    </div>
  )
}

export default Section3