import React, { Component } from 'react'
import axios from 'axios'

class Students extends Component {
    constructor() {
        super()
        this.state = { students: [] }

    }

    componentDidMount() {
        axios.get("http://localhost:3000/api/students", { crossdomain: true })
            .then(res =>
                console.log('<><><>', res.data))
            .catch(error => console.error(error))
    }

    render() {
        return (
            <h3>something</h3>
        )
    }
}

export default Students;