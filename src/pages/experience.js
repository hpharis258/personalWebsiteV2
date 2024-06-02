import WithSubnavigation from "../components/NavBar";
import AppFooter from "../components/AppFooter";
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_API_KEY);

async function getExperience() {
  const { data: experience, error } = await supabase
    .from('experience')
    .select('*').order('id', { ascending: false });
  if (error) console.log('error', error);
  console.log(experience);
  return experience;

}

function Experience() {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    getExperience().then(data => setExperience(data));
    console.log(experience);
  }
  , []);
  if (!experience) {
    return (
      
      <>
       <WithSubnavigation />
       <div className="container vh-100">
        <h1>Loading...</h1>
      </div>
      <AppFooter />
      </>
     
    )
  }
    return (
      <>
      <WithSubnavigation />
      <div className="container">
        <h1>Experience</h1>
        <ul>
          {experience.map(experience => (
            <div style={{marginBottom: 20}} className="card" key={experience.id}>
            <div className="card-header">
            <h1>{experience.company}</h1>
           
            </div>
            <div className="card-body">
            <h2>Job Title: {experience.role}</h2>
            <h4>Responsibilities</h4>
            <p>{experience.responsibilities}</p>
            <h4>Technologies Used</h4>
            <p>
            {experience.technologies}
            </p>
           <h4>Time worked</h4>
            <p><b>{experience.dateText}</b></p>
            <h4>Link</h4>
            <a className="bg-success bg-gradient bg-opacity-80" style={{borderRadius: 5, padding: 10}} href={experience.link}>{experience.link}</a>
            <img style={{maxHeight: 100, margin: 30, backgroundColor: 'grey'}} src={experience.logoLink} />
            </div>
            </div>
          ))}
        </ul>
       
      </div>
      <AppFooter />
      </>
     
    );
  }   
  
  export default Experience;    