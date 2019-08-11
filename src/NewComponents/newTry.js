import React, {Component} from 'react'

class NewTry extends Component {
  render() {
    return(
      <div>
        {Object.keys(this.props.features).map(feature => <div>{feature}</div>) 
        }
      </div>
    )
  }
}
export default NewTry;