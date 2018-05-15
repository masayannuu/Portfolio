import styled from 'styled-components'
import { Section } from 'reactbulma'

const StyledSection = styled(Section)`
  margin-bottom: 229px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`

export default StyledSection
