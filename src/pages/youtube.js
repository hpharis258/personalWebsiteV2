import WithSubnavigation from "../components/NavBar";
import AppFooter from "../components/AppFooter";

function Youtube() {
    return (
      <>
      <WithSubnavigation />
       <div className="container"> 
       <iframe src='https://widgets.sociablekit.com/youtube-channel-videos/iframe/25473272' frameborder='0' width='100%' height='1000'></iframe>
      </div>
      <AppFooter />
      </>
     
    );
  }   
  
  export default Youtube;    