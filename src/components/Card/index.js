import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { StyledTextCard } from './styled'
import dayjs from 'dayjs'

const Card = ({ url, title, date, img_url, source_name }) => {
  return (
    <div className="card">
      <StyledTextCard>NOTICIAS</StyledTextCard>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={img_url} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Source Name <a href={url} target="_blank" className="card-footer-item">{source_name}</a></p>
            <p className="subtitle is-6">{dayjs(date).format('YYYY[-]MM[-]DD')} | {source_name}</p>
          </div>
        </div>
        <div className="content">
          {title}
          <br />
        </div>
      </div>
      <footer className="card-footer">
        <a href={url} target="_blank" className="card-footer-item">{source_name}</a>
      </footer>
    </div>
  )
}

Card.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.number,
  img_url: PropTypes.string,
  source_name: PropTypes.string,
}

export default Card
