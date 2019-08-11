import React, {Component} from 'react'

class NewTry extends Component {
  render() {
    return(
      <div>
        {this.props.features.Processor[1].name}
      </div>
    )
  }
}
export default NewTry;