import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

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
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
