import * as React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({ url, children }) => {
  return <Link to={url}>{children}</Link>
}

Card.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const Image = ({ image, alt }) => (
  <div className="relative" style={{ paddingBottom: '65%' }}>
    <img src={image} alt={alt} />
  </div>
)

Image.propTypes = {
  image: PropTypes.object,
  alt: PropTypes.string,
}

Image.defaultProps = {
  image: null,
  alt: '',
}

const Title = ({ children }) => <h4 className="font-sora mt-4">{children}</h4>

Title.propTypes = {
  children: PropTypes.node.isRequired,
}
const Number = ({ children }) => (
  <h3 className=" font-inter font-black text-indigo-900 mt-4">{children}</h3>
)

Number.propTypes = {
  children: PropTypes.node.isRequired,
}

const Description = ({ children }) => {
  return <p className="mt-2">{children}</p>
}

Description.propTypes = {
  children: PropTypes.node.isRequired,
}

Card.Image = Image
Card.Title = Title
Card.Description = Description
Card.Number = Number

export default Card
