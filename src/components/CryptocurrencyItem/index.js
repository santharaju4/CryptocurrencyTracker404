// Write your JS code here
import {Component} from 'react'

import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {cryptoBlogDetails} = this.props
    const {currencyName, usdValue, euroValue, currencyLogo} = cryptoBlogDetails
    return (
      <li className="cryptocurrency-item">
        <div className="logo-and-title-container">
          <img
            className="currency-logo"
            src={currencyLogo}
            alt={currencyName}
          />
          <p className="currency-name">{currencyName}</p>
        </div>
        <div className="usd-and-euro-values-container">
          <p className="currency-value">{usdValue}</p>
          <p className="currency-value">{euroValue}</p>
        </div>
      </li>
    )
  }
}

export default CryptocurrencyItem
