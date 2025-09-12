import WithSubnavigation from '../components/NavBar';
import AppFooter from '../components/AppFooter';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const experienceData = [
  {
    id: 1,
    company: 'Davies Group',
    role: 'Backend Developer',
    responsibilities:
      'Web application development using HTML, CSS, JavaScript, C# and Microsoft SQL Server.',
    technologies:
      'C#, .NET MVC, Microsoft SQL Server, JavaScript, jQuery, Bootstrap.  ',
    dateText: '2023 July - Present',
    link: 'https://davies-group.com/',
    logoLink:
      'https://otcbtatespfbfgggujqw.supabase.co/storage/v1/object/public/images/davies-logo.jpeg',
  },
  {
    id: 1,
    company: 'Ascent Business Solutions',
    role: 'Cloud Systems Developer',
    responsibilities:
      'CRM System Development, Low Code Development using Zoho Creator, API Integrations, Deluge Script Automations. JavaScript Development. Business Process automation development. Communicating with key stakeholders and clients. ',
    technologies: 'JavaScript, React, CRM, Zoho, Deluge Script, ',
    dateText: '2022 March - 2023 July',
    link: 'http://ascentbusiness.co.uk/',
    logoLink:
      'https://otcbtatespfbfgggujqw.supabase.co/storage/v1/object/public/images/ascent-logo.png',
  },
];

function Experience() {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    setExperience(experienceData);
  }, []);
  if (!experience) {
    return (
      <>
        <WithSubnavigation />
        <div className="container vh-100">
          <h1>Loading...</h1>
        </div>
        <AppFooter />
      </>
    );
  }
  return (
    <>
      <WithSubnavigation />
      <div className="container" style={{ height: 'max-content' }}>
        <h1>Experience</h1>
        <ul>
          {experience.map(experience => (
            <div
              style={{ marginBottom: 20 }}
              className="card"
              key={experience.id}
            >
              <div className="card-header">
                <h1>{experience.company}</h1>
              </div>
              <div className="card-body">
                <h2>Job Title: {experience.role}</h2>
                <h4>Responsibilities</h4>
                <p>{experience.responsibilities}</p>
                <h4>Technologies Used</h4>
                <p>{experience.technologies}</p>
                <h4>Time worked</h4>
                <p>
                  <b>{experience.dateText}</b>
                </p>
                <h4>Link</h4>
                <a
                  className="bg-success bg-gradient bg-opacity-80"
                  style={{ borderRadius: 5, padding: 10 }}
                  href={experience.link}
                >
                  {experience.link}
                </a>
                <img
                  style={{
                    maxHeight: 100,
                    margin: 30,
                    backgroundColor: 'grey',
                  }}
                  src={experience.logoLink}
                />
              </div>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <AppFooter />
      </div>
    </>
  );
}

export default Experience;
