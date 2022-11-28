import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Approvidercontext } from './context/Approvidercontext';
import { Filtercontext } from './context/Filtercontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Approvidercontext>
<Filtercontext>
<App />
</Filtercontext>
    </Approvidercontext>
  </React.StrictMode>
);


