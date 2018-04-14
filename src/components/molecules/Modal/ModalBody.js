import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'reactbulma'

const ModalBody = ({ imageUrl, description, teamData }) => (
  <div className="content">
    <Image src={imageUrl} />
    <h3>説明</h3>
    <p>{description}</p>
    <h3>チームについて</h3>
    <dl>
      <dt>人数</dt>
      <dd>{teamData.number}人</dd>
      <dt>役割</dt>
      <dd>{teamData.roll}</dd>
      <dt>やったこと</dt>
      <dd>{teamData.work}</dd>
    </dl>
  </div>
)

ModalBody.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  teamData: PropTypes.shape({
    number: PropTypes.number,
    roll: PropTypes.string,
    work: PropTypes.string
  }).isRequired
}

export default ModalBody
