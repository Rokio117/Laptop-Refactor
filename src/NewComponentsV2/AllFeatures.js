import React, {Component} from 'react'
import slugify from 'slugify';
import Features from './Features'
import Feature from './Feature'

export default class AllFeatures extends Component {
  render() {
    return(
      Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <Features 
              itemHash={itemHash}
              checked={item.name === this.props.selected[feature].name}
              feature={feature}
              item={item}
              USCurrencyFormat={this.props.USCurrencyFormat}
              updateFeature={this.props.updateFeature}
  
            />
          );
        });
  
        return (
          <Feature 
            featureHash={featureHash}
            feature={feature}
            options={options}
          />
        );
      }
    ))
  }
}