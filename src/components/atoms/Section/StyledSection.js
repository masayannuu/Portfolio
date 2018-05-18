import styled from 'styled-components'
import { Section } from 'reactbulma'

const StyledSection = styled(Section)`
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-right: 1.5em;
    padding-left: 1.5em;
    margin-bottom: 150px;
  }
  @media screen and (min-width: 769px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 229px;
  }
`

export default StyledSection
