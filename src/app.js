import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <div>
    <h1>Hello</h1>
    <p>This is react, and webpack. It is {new Date().toString()}.</p>
  </div>
)

render(<App />, document.getElementById('app'))
