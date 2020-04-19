//import React from 'react'
//import {render} from 'react-dom'

//import ReactGreeter from './ReactGreeter'

import './main.css'

const greeter=require('./Greeter.js')
//alert('main.js')
document.querySelector('#testMain').appendChild(greeter())
//document.getElementById('root').appendChild(greeter())
//alert(document.getElementById('root'))
//render(<ReactGreeter name="mky"/>, document.getElementById('root'))