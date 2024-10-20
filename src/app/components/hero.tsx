import React from "react";
import styles from "./page.module.css"
import images from "../images/bann.jpg";

const Hero = () => {
    return(
     
    <section className={styles.hero}>
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Let me help you build a digital presence with my coding skills <br />
        Take your business to another level</p>
      <button><a href="/services">Get Started</a></button>
    </div>
    <img 
      src={images.src}  
      alt="Programming concept" 
      className={styles.imageStyle} 
      style={{ height: '360px', width: '40%' }} 
    />
  </section>
)}
export default Hero;