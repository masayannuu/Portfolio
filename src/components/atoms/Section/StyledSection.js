import styled from 'styled-components'
import { Section } from 'reactbulma'

const StyledSection = styled(Section)`
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 150px;
  }
  @media screen and (min-width: 481px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 229px;
  }
`

export default StyledSection
