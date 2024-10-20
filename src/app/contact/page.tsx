import styles from "./page.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function contact() {
  return (
    <>

       <Header/>

      <section className={styles.hero}>
        <h1>Welcome to the contact page</h1>
        <br /><br /><br />
        <h3>+923333333333</h3>
        <h3>second no: 92333333333</h3>
        <h3>Email: myname@example.com</h3>
       
      </section>
<Footer/>
      
    
     
    </>
  );
}