import "./main.css"
import Greet from "./Greet"
import { render } from "react-dom"
import React from 'react'

const greet1=document.createElement("div")
document.body.appendChild(greet1)
render(<Greet name="another user"/>, greet1)