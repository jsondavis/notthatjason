import React from 'react'
import PropTypes from 'prop-types'
import { PreviewCompatibleImage } from '../PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6 flex">
        <section className="section ba b--black-40 p3 mv2 mh1 flex items-center grow">
          <div className="has-text-centered">
            <div
              style={{
                width: '200px',
                display: 'inline-block',
              }}
              className="mh4 mv3"
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p className="mh4">{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
