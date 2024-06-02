import WithSubnavigation from "../components/NavBar";
import AppFooter from "../components/AppFooter";
function Projects() {
    return (
      <>
      <WithSubnavigation />
       <div className="container">
        <h1>Projects</h1>
        <p>This page shows some of the latest side projects that I have created.</p>
      </div>
      <AppFooter />
      </>
     
    );
  }   
  
  export default Projects;    