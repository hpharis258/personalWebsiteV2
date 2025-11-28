import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import Home from './pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Education from './pages/education';
import '../src/CDN/bootstrap.min.css';
import Experience from './pages/experience';
import Certifications from './pages/certifications';
import Projects from './pages/projects';
import Youtube from './pages/youtube';
import Contact from './pages/contact';
import About from './pages/about';
import '../src/CDN/app.css';
import Cookies from './pages/cookies';
import FAQ from './pages/FAQ';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/education',
    element: <Education />,
  },
  {
    path: '/experience',
    element: <Experience />,
  },
  {
    path: '/certifications',
    element: <Certifications />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/youtube',
    element: <Youtube />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/FAQ',
    element: <FAQ />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/cookies',
    element: <Cookies />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
