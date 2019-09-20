import React from 'react'
import styled from 'styled-components'
import { Image } from 'reactbulma'
import InViewMonitor from 'react-inview-monitor'

import SubHeading from '../../atoms/Title/SubHeading'
import StyledSection from '../../atoms/Section/StyledSection'
import Icon from '../../../../public/three-sibe-back.png'

const StyledDiv = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) {
    width: 593px;
  }
  @media screen and (min-width: 1408px) {
    width: 100%;
  }
  font-feature-settings: 'palt';
  letter-spacing: 0.1em;
  -webkit-animation-duration: 2s;
  -moz-animation-duration: 2s;
  animation-duration: 2s;
  font-size: 1rem;
`

const StyledImage = styled(Image)`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) {
    position: -webkit-sticky;
    position: sticky;
    top: 50px;
    width: 367px;
    height: 593px;
  }
  @media screen and (min-width: 1408px) {
    position: -webkit-sticky;
    position: sticky;
    top: 50px;
    width: 50%;
    height: 593px;
  }
`

const StyledAnker = styled.a`
  color: #4a4a4a;
  &:hover {
    color: #a2c4c7;
  }
`

const StyledDl = styled.dl`
  margin-bottom: 1rem;
`

const ThreePoints = () => (
  <StyledSection id="ThreePoints">
    <SubHeading>3-CLUTURES</SubHeading>
    <div className="columns">
      <StyledDiv className="column">
        <InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated slideInLeft">
          <StyledImage src={Icon} />
        </InViewMonitor>
      </StyledDiv>
      <StyledDiv className="column tk-a-otf-gothic-bbb-pr6n">
        <InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated slideInUp">
          <StyledDl>
            <dt>
              <b>1. 毎日読書をしている</b>
            </dt>
            <dd>本や論文は好奇心と知識の源。行動と思考を補助してくれる叡智。</dd>
            <dd>
              漫画は
              <StyledAnker
                href="https://ja.wikipedia.org/wiki/%E4%B9%9D%E4%BA%95%E8%AB%92%E5%AD%90"
                target="_blank"
              >
                九井諒子先生
              </StyledAnker>
              の「
              <StyledAnker
                href="https://www.amazon.co.jp/dp/B00E59A03O/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1"
                target="_blank"
              >
                ひきだしにテラリウム
              </StyledAnker>
              」が好き。
            </dd>
          </StyledDl>
          <StyledDl>
            <dt>
              <b>2. 構造思考で見つめる</b>
            </dt>
            <dd>システム思考フェチ。図解も好き。</dd>
            <dd>幾何学な設計と、それが寂びていく風景も好き。</dd>
          </StyledDl>
          <StyledDl>
            <dt>
              <b>3. スノーボードが好き</b>
            </dt>
            <dd>10歳離れた兄とのコミュニケーション手段から始まり、見事にハマった。</dd>
            <dd>バックカントリーで見た蔵王山の樹氷に心打たれている。</dd>
          </StyledDl>
        </InViewMonitor>
      </StyledDiv>
    </div>
  </StyledSection>
)

export default ThreePoints
