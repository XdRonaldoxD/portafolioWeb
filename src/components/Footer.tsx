import { Link } from 'react-router-dom';
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <footer>
      <div className={styles['redes']}>
        <Link to={'https://www.facebook.com/smith.durandluna/'} target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
        <Link to={'https://www.linkedin.com/in/ronaldo-smit-durand-luna-1b0753172/'} target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
        <Link to={'https://github.com/XdRonaldoxD'} target="_blank"><i className="fa-brands fa-git"></i></Link>
        {/* <Link to={'/'}><i className="fa-brands fa-twitter"></i></Link>
        <Link to={'/'}><i className="fa-brands fa-skype"></i></Link> */}
      </div>
    </footer>);
}