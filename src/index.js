import React, { PureComponent } from 'react'
import Reactdom from 'react-dom'
import App from './components/app.jsx'

Reactdom.hydrate(<App />, document.querySelector('app'))
