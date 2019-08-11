import React, { Component } from 'react';
import FeatureItem from './feature-item'
import SummaryOption from './summaryOption'

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
          {<FeatureItem 

          />}
        </form>
        <section className="main__summary">
          <h2>Your cart</h2>
          {<SummaryOption
             
          />}
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