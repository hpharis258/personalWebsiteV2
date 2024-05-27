import { ColorModeScript } from '@chakra-ui/react';
import WithSubnavigation from '../components/NavBar';
import AppFooter from '../components/AppFooter';

function Home() {
  return (
    <>
    <WithSubnavigation />
     <div>
      <h1>Home</h1>
    </div>
    <AppFooter />
    </>
   
  );
}   

export default Home;    

