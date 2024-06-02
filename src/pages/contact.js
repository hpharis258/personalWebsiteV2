import WithSubnavigation from "../components/NavBar";
import AppFooter from "../components/AppFooter";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import Notiflix from "notiflix";
import axios from 'axios';

function Contact() {
  const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const sendEmail = (e) => {
      e.preventDefault();
      document.getElementById('submitBtn').disabled = true;
      document.getElementById('submitBtn').innerHTML = 'Loading...';
      if(!email){
          Notiflix.Report.failure(
              'Error',
              'Add an email!',
              'Okay',
          );
          document.getElementById('submitBtn').disabled = false;
          document.getElementById('submitBtn').innerHTML = 'send message';
          return
      }
      if(!message){
          Notiflix.Report.failure(
              'Error',
              'Add a message!',
              'Okay',
          );
          document.getElementById('submitBtn').disabled = false;
          document.getElementById('submitBtn').innerHTML = 'send message';
          return
      }
      let fData = {
          service_id: process.env.REACT_APP_EMAILJS_SERVICE_ID,
          template_id: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          user_id: process.env.REACT_APP_EMAILJS_USER_ID,
          template_params: {
              'email': email,
              'message': message
          }
      };
      axios({
          method: "post",
          url: 'https://api.emailjs.com/api/v1.0/email/send',
          data: JSON.stringify(fData),
          headers: {
              'Content-Type':  'application/json'
          }
      })
      .then(function (response) {
          document.getElementById('submitBtn').disabled = false;
          document.getElementById('submitBtn').innerHTML = 'send message';
          //clearInput()
          //handle success
          Notiflix.Report.success(
              'Success',
              response.data.message,
              'Okay',
          );
      })
      .catch(function (error) {
          document.getElementById('submitBtn').disabled = false;
          document.getElementById('submitBtn').innerHTML = 'send message';
          //handle error
          const { response } = error;
          if(response.status === 500) {
              Notiflix.Report.failure(
                  'An error occurred',
                  response.data.message,
                  'Okay',
              );
          }
          if(response.data.errors !== null) {
              //setErrors(response.data.errors)
          }
          
      });

      //window.location.reload();
  }
    return (
      <>
      <WithSubnavigation />
       <div className="container" style={{marginBottom: '25%', marginTop: 20}}>
        <h1>Contact</h1>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(changeEvent) => setEmail(changeEvent.target.value)} type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control value={message} onChange={(changeEvent) => setMessage(changeEvent.target.value)} placeholder='I have a question about...' as="textarea" rows={3} />
        <Button style={{marginTop: 10}} id='submitBtn' onClick={sendEmail} variant="primary" type="submit"> Submit </Button>
      </Form.Group>
    </Form>
      </div>
      <AppFooter />
      </>
     
    );
  }   
  
  export default Contact;    