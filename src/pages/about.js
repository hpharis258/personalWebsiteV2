import WithSubnavigation from "../components/NavBar";
import AppFooter from "../components/AppFooter";

function About() {
    return (
      <>
      <WithSubnavigation />
       <div className='vh-100 container'>
        <h1>About</h1>
      </div>
      <AppFooter />
      </>
     
    );
  }   
  
  export default About;    