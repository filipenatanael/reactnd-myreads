import React from 'react'
import PropTypes from 'prop-types'

const Loading = (props) => {
  return (
    <div className="loader">
      <li className="loaderSpinner"/>
        <h2 className="loadMessage">{props.message}
      </h2>
    </div>
  )
}

Loading.propTypes = {
  message: PropTypes.string
}

Loading.defaultProps = {
  message: 'Loading...'
}

export default Loading
