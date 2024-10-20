import styles from "./page.module.css";
import Hero from "./components/hero";
import Header from "./components/header";
import Footer from "./components/footer";

const Home =()=> {
  return (
    <> 
    <Header/>
   <Hero/>
      <hr />

      <section className={styles.aboutUs}>
        <h2>About Us</h2>
        <p>i am an experienced developer  with a passion <br /> for creating digital solutions that drive business growth <br />its not only about the website but the visitors experience</p>
        <button><a href="/about">Learn More</a></button>
      </section>
<hr />
      <section className={styles.services}>
        <h2>Our Services</h2>
        <p>We provide a vast veriety of services which include <br /> web design web development and app development and i am <br /> currently working on sharpening my skills and provide more for you</p>
        <button><a href="/services">View Services</a></button>
      </section>
<hr />
      <section className={styles.contact}>
        <h2>Get in Touch</h2>
        <p>after clicking on the link below you will be taken to <br />a page which contain the all the contact details that you'll need <br /></p>
        <button><a href="/contact">Contact Us</a></button>
      </section>
<hr />
      <Footer/>
     
    </>
  );
}
export default Home;