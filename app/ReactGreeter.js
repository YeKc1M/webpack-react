import React from 'react'

class ReactGreeting extends React.Component{
    render(){
        return <div>
            hello, {this.props.name}!
        </div>
    }
}

export default ReactGreeting