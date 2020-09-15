
'use strict'
'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'

class App extends Component {
  render () {
    return (
      <div className='container' onClick={() => { alert('clicou') }}>
        <Title name='dunha' />
        {['red', 'green', 'blue'].map((source, index) => (
          <Square key={index} color={source} />
        ))}
        <Button>Botão</Button>
      </div>
    )
  }
}
export default App
