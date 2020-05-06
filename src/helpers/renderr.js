import React from 'react'
import { renderToString } from 'react-dom/server'

import App from '../components/app.jsx'

export default (req) => {
	const content = renderToString(<App />)

	return `
    <html>
      <head>
       
        
      </head>
      <body>
        <div id="root">${content}</div>
        
       
      </body>
    </html>
  `
}
