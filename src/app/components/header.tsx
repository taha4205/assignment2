import React from "react";
import styles from  './page.module.css';


const header = () =>{
    return (
        <header>
        <nav className={styles.navbar}>
          <span className={styles.logo}>Portfolio</span>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default header;