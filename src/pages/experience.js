import WithSubnavigation from '../components/NavBar';
import AppFooter from '../components/AppFooter';
import { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaAws, FaBuilding } from 'react-icons/fa';
import {
  SiCsharp,
  SiDotNet,
  SiMicrosoftsqlserver,
  SiJquery,
  SiBootstrap,
  SiFlutter,
  SiDart,
  SiMicrosoftazure,
  SiAzuredevops,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiRedis,
} from 'react-icons/si';

const zohoIcon =
  'https://www.zohowebstatic.com/sites/zweb/images/commonroot/zoho-logo-web.svg';
const experienceData = [
  {
    id: 1,
    company: 'Davies Group',
    role: 'Backend Developer',
    responsibilities: `
      Developed and maintained the next-generation Bedrock Self-Serve platform using C# .NET MVC, jQuery, and SQL Server. 
      Optimised backend and frontend performance, improving response times.
    `,
    technologies: [
      { name: 'C#', icon: <SiCsharp /> },
      { name: 'SQL Server', icon: <SiMicrosoftsqlserver /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Azure', icon: <SiAzuredevops /> },
      { name: 'Redis', icon: <SiRedis /> },
    ],
    dateText: 'Sep 2024 – Present',
    link: 'https://davies-group.com/',
    logoLink:
      'https://otcbtatespfbfgggujqw.supabase.co/storage/v1/object/public/images/davies-logo.jpeg',
  },
  {
    id: 2,
    company: 'Davies Group',
    role: 'Low Code Developer',
    responsibilities: `
      Built web and mobile apps for local councils using Flutter Flow with custom Dart code extensions.
      Developed Azure Cloud Functions APIs in C# and integrated Swagger for API documentation.
      Managed Supabase backend services, including database schema design and authentication.
    `,
    technologies: [
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'Dart', icon: <SiDart /> },
      { name: 'C#', icon: <SiCsharp /> },
      { name: 'Azure', icon: <SiAzuredevops /> },
      // { name: 'Terraform', icon: <SiTerraform /> },
      {
        name: 'Supabase',
        icon: (
          <img
            src="https://img.icons8.com/?size=100&id=sH0rW2TvYdr9&format=png&color=000000"
            alt="Supabase"
            title="Supabase"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
        ),
      },
      { name: 'JavaScript', icon: <SiJavascript /> },
    ],
    dateText: 'Jul 2023 – Sep 2024',
    link: 'https://davies-group.com/',
    logoLink:
      'https://otcbtatespfbfgggujqw.supabase.co/storage/v1/object/public/images/davies-logo.jpeg',
  },
  {
    id: 3,
    company: 'Ascent Business Solutions',
    role: 'Cloud Systems Developer',
    responsibilities: `
      Designed and developed cloud-integrated CRM and ERP systems using C# .NET and JavaScript.
      Automated business workflows via Zoho Flow and custom webhook integrations.
      Collaborated with SMEs to deliver tailored software solutions improving data accuracy and efficiency.
    `,
    technologies: [
      { name: 'C#', icon: <SiCsharp /> },

      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <FaReact /> },
      {
        name: 'Zoho',
        icon: (
          <img
            src={zohoIcon}
            alt="Zoho"
            title="Zoho"
            style={{ width: 28, height: 28 }}
          />
        ),
      },
    ],
    dateText: 'Mar 2022 – Jul 2023',
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

  return (
    <>
      <WithSubnavigation />
      <div className="container py-5">
        <h1 className="mb-4 text-3xl font-bold">Experience</h1>
        {experience.map(exp => (
          <div
            key={exp.id}
            className="card mb-5 shadow-lg rounded-2xl border-0 p-4"
          >
            <div className="card-header bg-light border-0">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{exp.role}</h2>
                  <h3 className="text-md text-gray-600">{exp.company}</h3>
                </div>
                <img
                  src={exp.logoLink}
                  alt={`${exp.company} logo`}
                  className="h-16 rounded-xl bg-gray-100 p-2"
                />
              </div>
            </div>
            <div className="card-body mt-3">
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {exp.responsibilities}
              </p>
              <h4 className="mt-4 font-semibold">Technologies Used</h4>
              <div className="flex flex-wrap gap-3 mt-2">
                {exp.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2 shadow-sm"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">{exp.dateText}</p>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-600 hover:underline"
              >
                Visit Company Website
              </a>
            </div>
          </div>
        ))}
      </div>
      <AppFooter />
    </>
  );
}

export default Experience;
