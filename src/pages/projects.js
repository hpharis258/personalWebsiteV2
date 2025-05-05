import WithSubnavigation from '../components/NavBar';
import AppFooter from '../components/AppFooter';
function Projects() {
  return (
    <>
      <WithSubnavigation />
      <div className="container vh-100">
        <h1>Projects</h1>
        <div class="container">
          <div className="card">
            <div className="card-header">BlogSomething.com live preview</div>
            <div className="card-body">
              <iframe
                src="https://blogsomething.com"
                style={{ width: '100%', height: '500px' }}
              ></iframe>
              <h2>BlogSomething</h2>
              <p>
                BlogSomething is a blogging website that allows users to share
                their thoughts and ideas with the world. Users can create an
                account, write blog posts, and share them with other users.
                BlogSomething is built using React and Supabase.
              </p>
            </div>
            <div className="card-footer">
              <a href="https://blogsomething.com">View Project</a>
            </div>

            <div className="card mt-5">
              <div className="card-header">terminal-pos.com live preview</div>
              <div className="card-body">
                <iframe
                  src="https://www.terminal-pos.com/"
                  style={{ width: '100%', height: '500px' }}
                ></iframe>
                <h2>terminal-pos.com</h2>
                <p>
                  terminal-pos.com is a Point of Sale System for the Stripe
                  BBPOS WisePOS E terminal.
                </p>
              </div>
            </div>
            <div className="card-footer">
              <a href="https://www.terminal-pos.com/">View Project</a>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <AppFooter />
        </div>
      </div>
    </>
  );
}

export default Projects;
