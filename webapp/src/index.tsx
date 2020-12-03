import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import registerServiceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// To start measuring performance in your app, pass a function to log results or send to an analytics endpoint.
// See also: https://bit.ly/CRA-vitals
reportWebVitals(console.log)

registerServiceWorker()
