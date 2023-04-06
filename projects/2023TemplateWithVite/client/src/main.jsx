import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import './index.css'
import ErrorPage from "./components/error-page";
import Contact from "./components/contact";


// /*
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="login" element={<Contact />} />
//       </Route>
//       )
//     );

// */

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="login" element={<Contact />} />
        </Route>
        )
      );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
