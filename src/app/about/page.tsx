import styles from "./page.module.css"
import Header from "../components/header";
import Footer from "../components/footer";

export default function about() {
  return (
    <>
<Header/>
      

      <section className={styles.hero}>
        <h1>Welcome to The about page</h1>
        
      </section>

      <Footer/>
    
     
    </>
  );
}