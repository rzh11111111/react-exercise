import React, {Component} from 'react'

export default class User extends Component {
    render(){
        console.log('user',this.props)
        return (
            <div>
                user
            </div>
        )
    }
}