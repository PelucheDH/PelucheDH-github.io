import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import InicioPage from './Pages/InicioPage';
import ImagenesPage from './Pages/ImagenesPage';
import VideosPage from './Pages/VideosPage';
import HistoriasPage from './Pages/HistoriasPage';
import AudiosPage from './Pages/AudiosPage';
import AboutPage from './Pages/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Inicio",
    element: <InicioPage/>,
  },
  {
    path: "Imagenes",
    element: <ImagenesPage/>,
  },
  {
    path: "Videos",
    element: <VideosPage/>,
  },
  {
    path: "Historias",
    element: <HistoriasPage/>,
  },
  {
    path: "Audios",
    element: <AudiosPage/>,
  },
  {
    path: "About",
    element: <AboutPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
