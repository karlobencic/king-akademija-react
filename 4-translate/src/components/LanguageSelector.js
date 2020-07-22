import React from 'react'
import LanguageContext from '../context/LanguageContext'

class LanguageSelector extends React.Component {

  static contextType = LanguageContext

  render() {
    const text = this.context.language === 'english' ? 'Select a Language' : 'Odaberi jezik'
    return (
      <div>
          {text}
        <i onClick={() => { this.context.onLanguageChange('english') }} className="flag us" />
        <i onClick={() => { this.context.onLanguageChange('hrvatski') }} className="flag hr" />
      </div>
    )
  }
}

export default LanguageSelector
