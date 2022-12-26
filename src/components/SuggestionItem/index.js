import './index.css'

const SuggestionItem = props => {
  const {data, clickeddata} = props
  const {id, suggestion} = data
  const datatransfer = () => {
    clickeddata(suggestion)
  }

  return (
    <li>
      <div className="suggestion-item-container">
        <p className="suggestion-text">{suggestion}</p>
        <img
          onClick={datatransfer}
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-img"
        />
      </div>
    </li>
  )
}

export default SuggestionItem
