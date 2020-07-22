import React from 'react'
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'

class Button extends React.Component {

  static contextType = LanguageContext

  renderSubmit = (value) => {
    return value === 'english' ? 'Submit' : 'Pošalji'
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        {this.renderSubmit(this.context.language)}
      </button>
    )
  }

  render() {

    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button
