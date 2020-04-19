import React from 'react'
import {render} from 'react-dom'

import ReactGreeter from './ReactGreeter'

import './main.css'
//alert(document.getElementById('root'))
render(<ReactGreeter name="mky"/>, document.getElementById('root'))
render(<ReactGreeter name='mickey'/>,document.getElementById('testMain'))

