import WithSubnavigation from "../components/NavBar";
import AppFooter from "../components/AppFooter";
import { useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import { useState } from "react";
import { Card } from "reactstrap";



const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_API_KEY);

async function getEducation() {
  const { data: education, error } = await supabase
    .from('education')
    .select('*').order('id', { ascending: false });
  if (error) console.log('error', error);
  console.log(education);
  return education;

}

function Education() {
  const [education, setEducation] = useState([]);
  useEffect(() => {
    getEducation().then(data => setEducation(data));
  }
  , []);
  if (!education) {
    return (
      
      <>
       <WithSubnavigation />
       <div className="container vh-100">
        <h1>Loading...</h1>
      </div>
     
      </>
     
    )
  }
    return (
      <>
      <WithSubnavigation />
      <div className="container" style={{height: 'max-content'}}>
        <h1>Education</h1>
        <ul>
          {education.map(education => (
           <Card style={{ marginBottom: 20}} key={education.id}>
            <div className="card-header">
            <h1>{education.name}</h1>
            </div>
            <div className="card-body">
            <img style={{maxWidth: "200px"}} src={education.logoURL} />
            <h2>{education.course}</h2>
            </div>
            
            <div className="card-footer">
            <h3>{education.dateText}</h3>
            </div>
           
            
            
            </Card>
            
          ))}
        </ul>
       
      </div>
      <div >
        <AppFooter />
      </div>
    
      </>
     
    );
  }   
  
  export default Education;    