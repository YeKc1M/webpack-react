import React from 'react'
import {render} from 'react-dom'
import src from './preview.jpg'

import ReactGreeter from './ReactGreeter'

import './main.css'
//alert(document.getElementById('root'))
render(<ReactGreeter name="mky"/>, document.getElementById('root'))
render(<ReactGreeter name='mickey'/>,document.getElementById('testMain'))

const JpgFile=()=><img src={src} width='100px'/>
render(<JpgFile/>, document.getElementById('jpg'))

