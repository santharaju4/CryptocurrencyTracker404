// Write your JS code here

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {blogData} = this.props

    return (
      <ul className="cryptocurrencies-list-item">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
          className="icon"
        />
        <div className="cryptocurrencies-container">
          <div className="list-header">
            <p className="list-coin-type-heading">Coin Type</p>
            <div className="usd-and-euro-values-container">
              <p className="list-coin-value-heading">USD</p>
              <p className="list-coin-value-heading">EURO</p>
            </div>
          </div>
          {blogData.map(eachBlog => (
            <CryptocurrencyItem
              key={eachBlog.id}
              cryptoBlogDetails={eachBlog}
            />
          ))}
        </div>
      </ul>
    )
  }
}

export default CryptocurrenciesList
