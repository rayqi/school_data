// import React, { Component } from 'react'

// export default class Child extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         const { listing } = this.props
//         return (
//             <div>
//                 {listing.map((name) => { return <h3 >{name}</h3> })}
//             </div>
//         )
//     }
// }

import React from 'react'

export default function Child(props) {
    console.log('props in func', props.listing)
    return (
        <div>
            {props.listing.map(name => { return <h3>{name}</h3> })}
        </div>
    )
}