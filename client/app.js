import React, { Component } from 'react'
import Child from './child'
import Home from './components/Home'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['moon', 'mars', 'venus']
        }
    }
    render() {
        // console.log('app', this.state.list)
        return (
            <Home />
            // <div>
            //     <h1>Messages</h1>
            //     {/* {this.state.list.map((name, index) => { return <h3>{`${name} ${index}`}</h3> })} */}
            //     <Child listing={this.state.list} />
            // </div>
        )
    }
}

