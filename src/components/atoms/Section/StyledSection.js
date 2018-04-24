import styled from 'styled-components'
import { Section } from 'reactbulma'

const StyledSection = styled(Section)`
  margin-bottom: 229px;
  @media screen and (min-width: 300px) {
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`

export default StyledSection
