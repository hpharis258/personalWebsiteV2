import WithSubnavigation from "../components/NavBar";
import AppFooter from "../components/AppFooter";

function Posts() {
    return (
      <>
      <WithSubnavigation />
      <div className='container vh-100'>
      <iframe src="https://widget.tagembed.com/2131396" style={{width: "100%", height: "100%"}}></iframe>

      </div>
      <AppFooter />
      </>
     
    );
  }   
  
  export default Posts;    