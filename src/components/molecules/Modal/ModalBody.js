import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image } from 'reactbulma'

import InfoTagGroup from '../Content/InfoTagGroup'

const StyledDiv = styled.div`
  font-feature-settings: 'palt';
  letter-spacing: 0.08em;
`

const StyledDt = styled.dt`
  margin-bottom: 0.15rem;
  margin-top: 0.8rem;
`

class ModalBody extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      informationTags: props.informationTags,
      imageUrl: props.imageUrl,
      description: props.description,
      teamData: props.teamData,
      isTag: props.isTag
    }
  }

  render () {
    const infomationTag = () => {
      if (!this.state.isTag) {
        return
      }

      const tags = this.state.informationTags
      // NOTE: Document管理用の名前は不要なので削除
      delete tags.name
      return Object.keys(tags).map(key => (
        <InfoTagGroup name={tags[key].label} tags={tags[key].tags} key={tags[key].label + key} />
      ))
    }

    return (
      <StyledDiv className="content">
        <Image src={this.state.imageUrl} />
        <h3>説明</h3>
        <p>{this.state.description}</p>
        {infomationTag()}
        <h3>チームについて</h3>
        <dl>
          <StyledDt>人数</StyledDt>
          <dd>{this.state.teamData.number}人</dd>
          <StyledDt>役割</StyledDt>
          <dd>{this.state.teamData.roll}</dd>
          <StyledDt>やったこと</StyledDt>
          <dd>{this.state.teamData.work}</dd>
        </dl>
      </StyledDiv>
    )
  }
}

ModalBody.propTypes = {
  informationTags: PropTypes.object,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  teamData: PropTypes.shape({
    number: PropTypes.number,
    roll: PropTypes.string,
    work: PropTypes.string
  }).isRequired
}

export default ModalBody
