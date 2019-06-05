/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import TextFilter from '../TextFilter'
import { StyledLinkSearch } from '../Nav/styled'

const Filters = ({ filters, onFilterChange }) => {
  const handleOptionChange = ({ name, value }) => {
    console.log('valores', name, value);
    const newFilters = { ...filters, [name]: value }
    onFilterChange(newFilters)
  }

  return (
    <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
      <div className="navbar-item">
        <TextFilter
          onTextChange={handleOptionChange}
          name="query"
          value={filters.query}
          icon="search-plus"
        />

          <StyledLinkSearch active={filters.query} to={`/busqueda/${filters.query}`}>
            <p className="navbar-item">
              <span>Search</span>
              <span className='icon is-small'>
                <i className='fas fa-search-plus' aria-hidden='true' />
              </span>
            </p>
          </StyledLinkSearch>

      </div>
    </nav>
  )
};

Filters.propTypes = {
  filters: PropTypes.shape({
    name: PropTypes.string,
  }),
  onFilterChange: PropTypes.func,
}

export default Filters
