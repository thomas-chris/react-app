import PropTypes from 'prop-types'
import React from 'react'

export default class Home extends React.Component {
  static propTypes = {
    home: PropTypes.object,
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
    this.props.getApiRequest()
  }

  render() {

    const healthyString = `Status of api is: ${this.props.home.health.status}`
    const unhealthyString = `Errors were returned: ${this.props.home.errors}`

    console.log(unhealthyString)

    const healthyApiReturn = this.props.home.health.status === 'healthy'
      ?
      <div>
        <p><label>{healthyString}</label></p>
      </div>
    : null

    console.log(this.props.home.errors)

    const unhealthyApiReturn = this.props.home.errors === undefined
      ? null
      : <div>
        <p><label>{unhealthyString}</label></p>
      </div>

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
            {healthyApiReturn}
            {unhealthyApiReturn}
          </div>
      </div>)
  }
}

