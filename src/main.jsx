import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import { StateContextProvider } from './Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContextProvider>
    <App />
  </StateContextProvider>
);