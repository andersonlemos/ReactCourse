
'use strict'
'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Title name='dunha' />
        {['red', 'green', 'blue'].map((source, index) => (
          <Square key={index} color={source} />
        ))}
      </div>
    )
  }
}
export default App
