import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoListItems} = props
  const {usdValue, euroValue, currencyName, currencyLogo} = cryptoListItems

  return (
    <li className="crypto-list-item-container">
      <div className="logo-container crypto-list-item flex">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p>{currencyName}</p>
      </div>
      <p className="crypto-list-item flex-item">{usdValue}</p>
      <p className="crypto-list-item flex-item">{euroValue}</p>
    </li>
  )
}
export default CryptocurrencyItem
