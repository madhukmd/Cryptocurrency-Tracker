import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const crypto = 'https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png'

class CryptocurrenciesList extends Component {
  state = {
    cryptoList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({cryptoList: updatedData, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state

    return (
      <div className="container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="CryptocurrenciesList-container">
            <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
            <img src={crypto} alt="cryptocurrency" className="crypto-img" />
            <ul className="cryptocurrencyItem-container">
              <li className="crypto-header">
                <h2 className="crypto-item flex">Coin Type</h2>
                <h2 className="crypto-item flex-item">USD</h2>
                <h2 className="crypto-item flex-item">EURO</h2>
              </li>
              {cryptoList.map(eachItem => (
                <CryptocurrencyItem
                  key={eachItem.id}
                  cryptoListItems={eachItem}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
