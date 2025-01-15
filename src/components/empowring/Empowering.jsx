import React from 'react'
import styles from '../empowring/Empowering.module.css';
import img from '../../assets/empower.PNG'
const Empowering = () => {
  return (
    <div className={styles.container}>
            <div className={styles.top}>
                <h2>Empowering Enterprises To Develop And Deploy Streamlined Cloud Adoption Strategy</h2>
                <p>Understand and map your readiness towards adopting modern digital platforms.  Understand and map your readiness towards adopting modern digital platforms a-driven decision for operational excellence</p>
            </div>
            <div className={styles.middle}>
                <ul>
                    <li>Cloud Migration strategy</li>
                    <li>Managed cloud services</li>
                    <li>Hybrid and multi-cloud services</li>
                    <li>Cloud security solutions</li>
                </ul>
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.right}>
                    <p className={styles.p1}>Cloud Security Solutions</p>
                    <p className={styles.p2}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, veritatis vel placeat beatae iusto ullam ipsam sit nesciunt autem consequuntur enim! Similique magni sequi consectetur facere eveniet quisquam placeat quis voluptatibus dolores, dolore itaque libero error impedit a ducimus nobis? Nisi minus ab, vel ad consequatur dolorem consectetur culpa tenetur!</p>
                    <div className={styles.btn}>Read More -</div>
                </div>
            </div>
            
    </div>
  )
}

export default Empowering