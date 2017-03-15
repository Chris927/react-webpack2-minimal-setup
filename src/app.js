import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <div>
    <h1>Hello</h1>
    <p>This is react. It is {new Date()}.</p>
  </div>
)

render(App, document.getElementById('app'))
