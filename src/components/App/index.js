import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'

// Call Components
import './index.css';
import Nav from '../Nav'
import Filters from '../Filters'
import Routes from './routes'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

dayjs.locale('es')

class App extends Component {
  constructor() {
    super()
    this.state = {
      filters: {
        query: '',
      },
    }
  }

  handleFilterChange = newFilters => {
    this.setState({ filters: newFilters })
  }

  render() {
    const { filters, currentDate } = this.state
    return (
      <Router>
        <div className="container">
          <Filters filters={ filters } onFilterChange={this.handleFilterChange} />
          <Nav />
          <Routes />
        </div>
      </Router>
    )
  }
}

export default App
