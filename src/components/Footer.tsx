import  styles from './Footer.module.css'
export default function Footer(){
    return(
       <footer>
        <a href="#inicio" className={styles['arriba']}>
          <i className="fa-solid fa-angles-up"></i>
        </a>
        <div className={styles['redes']}>
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-skype"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i className="fa-solid fa-rss"></i></a>
        </div>
      </footer>);
}