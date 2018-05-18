import React from 'react'
import styled from 'styled-components'
import { Image } from 'reactbulma'
import InViewMonitor from 'react-inview-monitor'

import SubHeading from '../../atoms/Title/SubHeading'
import StyledSection from '../../atoms/Section/StyledSection'
import Icon from '../../../../public/three-sibe-back.png'

const StyledDiv = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 593px;
  }
  font-feature-settings: 'palt';
  letter-spacing: 0.1em;
  -webkit-animation-duration: 2s;
  -moz-animation-duration: 2s;
  animation-duration: 2s;
  font-size: 0.95em;
`

const StyledImage = styled(Image)`
  @media screen and (max-width: 480px) {
    width: 80%;
  }
  @media screen and (min-width: 768px) {
    position: -webkit-sticky;
    position: sticky;
    top: 50px;
    width: 367px;
    height: 593px;
  }
`

const StyledAnker = styled.a`
  color: #4a4a4a;
  &:hover {
    color: #a2c4c7;
  }
`

const ThreePoints = () => (
  <StyledSection id="ThreePoints">
    <SubHeading>3POINTS</SubHeading>
    <div className="columns">
      <StyledDiv className="column">
        <InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated slideInLeft">
          <StyledImage src={Icon} />
        </InViewMonitor>
      </StyledDiv>
      <StyledDiv className="column tk-a-otf-gothic-bbb-pr6n">
        <InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated slideInUp">
          <ol>
            <li>
              <b>毎日読書</b>
              <ul>
                <li>本や論文は知識・好奇心の源で、行動と思考を補助してくれるツール</li>
                <li>
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
                  」が好き
                </li>
              </ul>
            </li>
            <li>
              <b>構造思考</b>
              <ul>
                <li>因果関係から全体を見渡すシステム思考フェチ</li>
                <li>物理的な幾何学構造と、それが寂びていく風景も好き</li>
              </ul>
            </li>
            <li>
              <b>スノーボード好き</b>
              <ul>
                <li>10歳離れた兄とのコミュニケーション手段だったが、めっちゃハマった</li>
                <li>フリーラン・バックカントリーがメイン。エアーは練習中</li>
              </ul>
            </li>
          </ol>
        </InViewMonitor>
      </StyledDiv>
    </div>
  </StyledSection>
)

export default ThreePoints
