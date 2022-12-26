import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchdata: '', pid: ''}

  change = event => {
    this.setState({searchdata: event.target.value})
  }

  clickeddata = message => {
    this.setState({searchdata: message})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchdata} = this.state

    console.log(searchdata)

    const filterdata = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchdata),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-img"
        />
        <div className="details-container">
          <img
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            className="search-img"
          />
          <input
            value={searchdata}
            onChange={this.change}
            type="search"
            placeholder="Search Google"
            className="inputstyle"
          />

          <ul className="ul-container">
            {filterdata.map(sugg => (
              <SuggestionItem
                clickeddata={this.clickeddata}
                key={sugg.id}
                data={sugg}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
