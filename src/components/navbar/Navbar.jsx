
import styles from '../navbar/Navbar.module.css'
import logo from '../../assets/logo.jpeg'

const Navbar = () => {

  
  return (
    <div className={styles.navbar}>
      <img src={logo} alt='logo' className={styles.logo}/>
      <ul className={styles.navbarMenu}>
        <li >Services</li>
        <li >Accelerators</li>
        <li >Industries</li>
        <li >Resources</li>
        <li>Neural AI</li>
        <li>Company</li>
      </ul>
      <div className={styles.navbarRight}>
        {/* <img src="" alt="search-icon" />
        <div className={styles.navabrSearchIcon}>
          <img src="" alt="" />
          <div className={styles.dot}></div>
        </div> */}
        <button className={styles.navbarButton}>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar