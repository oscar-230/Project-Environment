import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RoutesProject from './routes/RoutesProject';
import "@fortawesome/fontawesome-free/css/all.min.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RoutesProject />
  </StrictMode>,
);