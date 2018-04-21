import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image } from 'reactbulma'

import { Headline } from '../../atoms/Title/index'
import WorkContent from '../../molecules/Content/WorkContent'
import StyledSection from '../../atoms/Section/StyledSection'
import WorkImage from '../../../../public/work-side.png'

const StyledImage = styled(Image)`
  @media screen and (min-width: 300px) {
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    position: -webkit-sticky;
    position: sticky;
    top: 50px;
    width: 367px;
    height: 593px;
  }
`

const Work = ({ contents }) => (
  <StyledSection name="work">
    <Headline>| WORK</Headline>
    <div className="columns">
      <div className="column">
        <StyledImage src={WorkImage} />
      </div>
      <div className="column">
        {contents.map(content => (
          <WorkContent
            content={content}
            key={
              content.title +
              Math.random()
                .toString(36)
                .slice(-8)
            }
          />
        ))}
      </div>
    </div>
  </StyledSection>
)

Work.propTypes = {
  contents: PropTypes.array.isRequired
}

export default Work
