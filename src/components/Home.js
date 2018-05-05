import PropTypes from 'prop-types'
import React from 'react'

export default class Home extends React.Component {
  static propTypes = {
    getApiRequest: PropTypes.func.isRequired
  }

  static defaultProps = {
    getApiRequest: () => {}
  }

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    console.log(this.props)
    this.props.getApiRequest()
  }

  render() {
    return (
      <div className="row">
        <div>
        <header className="sticky">
          <link rel="stylesheet" href="https://gitcdn.link/repo/Chalarangelo/mini.css/master/dist/mini-dark.min.css" />
          <span href="#" className="logo">Testing out a few React Things</span>
        </header>
        </div>
          <div>
            <label>Hit the button to show what an action does</label>
            <button onClick={this.handleClick}>Hit Me</button>
          </div>
      </div>)
  }
}

