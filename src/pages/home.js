import WithSubnavigation from '../components/NavBar';
import AppFooter from '../components/AppFooter';
import { Canvas } from '@react-three/fiber';
import { Model } from '../Models/Model';
import { Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from 'react';
import { Button } from 'reactstrap';

function Home() {
  const [showToast, setShowToast] = useState(true);  
  return (
    <>
    <WithSubnavigation />
    <ToastContainer position='middle-center'>
    <Toast bg='success' onClose={() => setShowToast(!showToast)} show={showToast} style={{marginBottom: '35%', marginLeft: '25%'}} className='w-50'>
      <Toast.Header>
        
        <strong className="me-auto"><h3>Hi my name is Haroldas!</h3></strong>
        <small>25 years ago</small>
      </Toast.Header>
      <Toast.Body>     <p className='fs-6'>I am an experienced software developer with cloud expertise, I excel in designing, developing, and deploying applications that cater to businesses and users. Leveraging cloud technologies, I deliver scalable solutions accessible globally.</p>
</Toast.Body>

    </Toast>
  </ToastContainer>
 
 
    <div className='container'>
        <Canvas>
            <ambientLight intensity={0.5} />
            <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} />
            <Suspense fallback={null}>  
              <Model />
            </Suspense>
          
            <Environment preset='sunset' />
          </Canvas>
         
    </div>
    <div className='d-flex justify-content-center'>
  <Button style={{position: 'relative', top: -280}} onClick={() => setShowToast(!showToast)}>Show Message!</Button>
  </div>
   
     
    <AppFooter />
    </>
   
  );
}   

export default Home;    

