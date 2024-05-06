import React from 'react';
import ReactDOM from 'react-dom/client';
import{Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout';
import './index.css'
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Service from './components/service/Service';
import User from './components/user/User';
import Emplist from './components/list/Emplist';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='service' element={<Service/>}/>
      <Route path='contact' element={<Contact />} />
      <Route path='emplist' element={<Emplist/>} />
      <Route path='user/:userId' element={<User />}/>

    </Route>
    
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>
);


