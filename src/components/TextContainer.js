import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.updateText = this.updateText.bind(this);
  }

  updateText(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div className="textContainer">
        <textarea 
          style={{ 
            fontSize: this.props.fontSize, 
            fontFamily: this.props.fontFaminly, 
            color: this.props.fontColor
          }}
          onChange={this.updateText}
          value={this.state.text} 
          placeholder='Start typing your thoughts here!'
          cols="90"
          rows="30">
        </textarea>
      </div>
    )
  }
}



