import styles from './Footer.module.css';
import logo from '../../images/TI_Logo_-_Horizontal_-_Black-noBG.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <img src={logo} alt="ABC Technologies Logo" className={styles.logo} />
      </div>

      <div className={styles.center}>
        ©2025 ABC Technologies. All Rights Reserved.
      </div>

      <div className={styles.right}>
        <a href="https://abctechnologies.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        <span className={styles.separator}>|</span>
        <a href="https://abctechnologies.com/terms-of-use/" target="_blank" rel="noopener noreferrer">
          Term of Uses
        </a>
        <span className={styles.separator}>|</span>
        <a href="https://abctechnologies.com/wp-content/uploads/TIFS-ABC-Merged-Code-of-Business-Conduct-Policy-20250520.pdf" target="_blank" rel="noopener noreferrer">
          Code of Business Conduct
        </a>
      </div>
    </footer>
  );
};

export default Footer;
