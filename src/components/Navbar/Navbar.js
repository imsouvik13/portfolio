import React, { Component } from 'react'
import './Navbar.scss'
export default class Navbar extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: 'Souvik Halder'
    }
  }

  render() {

    const { name } = this.state


    return (
      <React.Fragment>
        <nav>
           <div className="brand-logo"> <span id="brand-text" > {name} </span> </div>
        </nav>
      </React.Fragment>
    )
  }
}
