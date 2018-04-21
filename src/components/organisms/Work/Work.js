import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Section, Image } from 'reactbulma'

import { Headline } from '../../atoms/Title/index'
import WorkContent from '../../molecules/Content/WorkContent'
import WorkImage from '../../../../public/work-side.png'

const StyledColumn = styled.div`
  overflow: scroll;
  height: 593px;
`
const StyledImage = styled(Image)`
  @media screen and (min-width: 300px) {
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    width: 367px;
    height: 593px;
  }
`

const Work = ({ contents }) => (
  <Section>
    <Headline>| WORK</Headline>
    <div className="columns">
      <div className="column">
        <StyledImage src={WorkImage} />
      </div>
      <StyledColumn className="column">
        {contents.map(content => <WorkContent content={content} />)}
      </StyledColumn>
    </div>
  </Section>
)

Work.propTypes = {
  contents: PropTypes.array.isRequired
}

export default Work
