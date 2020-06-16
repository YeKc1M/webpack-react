import React from 'react'

class Greet extends React.Component{
    render(){
    return <p>hello, {this.props.name}!</p>
    }
}

export default Greet