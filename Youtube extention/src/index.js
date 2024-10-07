const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./app');


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);