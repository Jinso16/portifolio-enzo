import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

window.addEventListener('load', function() { 
    const hash = window.location.hash;

    if (hash && hash.length > 1) {
        const targetElement = document.querySelector(hash);

        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth' 
                });
            }, 50);
        } else {
            console.warn(`Elemento com ID ${hash} não encontrado após o carregamento.`);
        }
    }
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
