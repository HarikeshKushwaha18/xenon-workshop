import React from 'react'
import styles from '../enterprise/Enterprise.module.css'
import img1 from '../../assets/cart1.PNG'
import img2 from '../../assets/cart2.PNG'
import img3 from '../../assets/cart3.PNG'
import img4 from '../../assets/cart4.PNG'
const Enterprise = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h2>Top Enterprise Resources</h2>
                <p>Understand and map your readiness towards adopting modern digital platforms.  Understand and map your readiness towards adopting modern digital platforms a-driven decision for operational excellence</p>
            </div>
            <div className={styles.carts}>
                <div className={styles.cart}>
                    <img src={img1} alt="" />
                    <div className={styles.content}>
                        <p className={styles.p1}>Cloud</p>
                        <p className={styles.p2}>Innovation Stack Approach enables enterprises to Improve the Business of Experience</p>
                        <div className={styles.btn}>Watch Now</div>
                    </div>
                </div>

                <div className={styles.cart}>
                    <img src={img2} alt="" />
                    <div className={styles.content}>
                        <p className={styles.p1}>Cloud</p>
                        <p className={styles.p2}>Innovation Stack Approach enables enterprises to Improve the Business of Experience</p>
                        <div className={styles.btn}>Watch Now</div>
                    </div>
                </div>

                <div className={styles.cart}>
                    <img src={img3} alt="" />
                    <div className={styles.content}>
                        <p className={styles.p1}>Cloud</p>
                        <p className={styles.p2}>Innovation Stack Approach enables enterprises to Improve the Business of Experience</p>
                        <div className={styles.btn}>Watch Now</div>
                    </div>
                </div>

                <div className={styles.cart}>
                    <img src={img4} alt="" />
                    <div className={styles.content}>
                        <p className={styles.p1}>Cloud</p>
                        <p className={styles.p2}>Innovation Stack Approach enables enterprises to Improve the Business of Experience</p>
                        <div className={styles.btn}>Watch Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enterprise