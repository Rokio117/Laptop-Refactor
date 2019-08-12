import React, {Component} from 'react'
import Summary from './Summary'
import AllFeatures from './AllFeatures'


export default class MainForm extends Component {
  render() {
    return(
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <AllFeatures 
              features={this.props.features}
              USCurrencyFormat={this.props.USCurrencyFormat}
              checked={this.props.checked}
              feature={this.props.feature}
              item={this.props.item}
              updateFeature={this.props.updateFeature}
              selected={this.props.selected}

            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary 
              selectedFeatures={this.props.selectedFeatures}
              selectedOption={this.props.selectedOption}
              USCurrencyFormat={this.props.USCurrencyFormat}
            />
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.props.USCurrencyFormat.format(this.props.total)}
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}