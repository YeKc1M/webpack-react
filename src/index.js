import React from 'react'
import {render} from 'react-dom'

import "./main.css"
import megumi from "./preview.jpg"

import component from "./component"
import Greet from "./Greet"

console.log("hello world!")
document.body.appendChild(component())
document.body.appendChild(component("Component"))
const greet=document.createElement("div")

document.body.appendChild(greet)
render(<Greet name="mky"/>, greet)

const megumiPic=document.createElement("div");
document.body.appendChild(megumiPic)
render(<img src={megumi} width="100px"/>, megumiPic)