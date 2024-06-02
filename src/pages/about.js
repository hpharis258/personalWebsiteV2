import WithSubnavigation from "../components/NavBar";
import AppFooter from "../components/AppFooter";

function About() {
    return (
      <>
      <WithSubnavigation />
       <div className='container'  style={{marginBottom: '10%', marginTop: 20}}>
        <h1>About</h1>
        <p>This page shows some information about me and reasons why I have this personal website.</p>

        <h2>My story</h2>
        <p>My name is Haroldas Varanauskas, I was born in Lithuania, moved to UK at the age of 12. Throughout my life I was mainly interested in 3 things Computers, Sport and Music. I have started to learn programming about 5 years ago just by myself using free code camp and other resources. Later on I decided that I would like to take coding seriously and that it could be a potential career for me, and even though I don't 100% know what I want to do with my life, being able to use a computer really well will be helpfull in anything that I choose to do. Hence I decided to go to Birmingham Metropolitan College and learn more about software development and cloud computing, really enjoyed the level 4 HND course and decided to keep on going, then got a Level 5 HNC and then went on to do a Computer Science Degree at University of Wolverhampton.</p>
        <h2>Why I have this website?</h2>
        <p>I have this website to show off my skills and projects that I have done, I also have a blog where I write about different things that I find interesting, I also have a contact page where you can contact me if you have any questions or if you would like to work with me. I also enjoy re-creating my personal website every few months just to try out a new technology or try to implement a feature that I haven't implemented before.</p>
        <h2>My Philosophy</h2>
        <p>My philosophy is to always keep learning and to always keep improving, I believe that if you are not moving forward you are moving backwards, I also believe that you should always be kind to others and help others when you can, I also believe that you should always be honest and always try your best to do what you say you are going to do.</p>
      </div>
      <AppFooter />
      </>
     
    );
  }   
  
  export default About;    