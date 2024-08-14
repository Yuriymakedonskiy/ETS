import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
    // BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from './components/Home';
import Vacancies from './components/Vacancies';
import Contacts from './components/contacts';
import ErrorPage from './components/ErrorPage';
import Video from './components/Video';
import Galery from './components/Galery';
import Blog from './components/Blog';
import AdminDB from './components/AdminDB';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/contacts",
        element: <Contacts/>,
        errorElement: <ErrorPage/>
      },
    {
        path: "/vacancies",
        element: <Vacancies/>,
        errorElement: <ErrorPage/>
      },
    {
        path: "/video",
        element: <Video/>,
        errorElement: <ErrorPage/>
      },
    {
        path: "/galery",
        element: <Galery/>,
        errorElement: <ErrorPage/>
      },
    {
        path: "/blog",
        element: <Blog/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "/404",
        element: <ErrorPage/>
        // errorElement: <ErrorPage/>
    },
      {
        path: "/admin",
        element: <AdminDB/>,
        errorElement: <ErrorPage/>
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  </HelmetProvider>
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom'
// import './styles/styles.scss';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );