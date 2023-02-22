import styles from './Footer.module.scss';
import clsx from 'clsx';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <span>Copyright <span className={clsx("fa fa-copyright")} /> BlogApp 2023</span>
    </div>
  )
}

export default Footer;