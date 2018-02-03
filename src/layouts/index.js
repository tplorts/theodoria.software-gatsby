import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import faviconICO from '../static/icons/favicon.ico'
import './global.scss'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Theodoria"
      meta={[
        {
          name: 'description',
          content: 'Software Product Engineer/Developer; Web & Mobile, Full Stack',
        },
      ]}
    >
      <link rel="shortcut icon" type="image/x-icon" href={ faviconICO } />
    </Helmet>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
