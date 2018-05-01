import React from 'react'
import styled from 'styled-components'
import { Image } from 'reactbulma'
import InViewMonitor from 'react-inview-monitor'

import Headline from '../../atoms/Title/Headline'
import StyledSection from '../../atoms/Section/StyledSection'
import Icon from '../../../../public/icon.png'

const StyledParagraph = styled.div`
  font-feature-settings: 'palt';
  letter-spacing: 0.1em;
  -webkit-animation-duration: 2s;
  -moz-animation-duration: 2s;
  animation-duration: 2s;
  font-size: 0.9em;
`

const StyledDiv = styled.div`
  @media screen and (min-width: 600px) {
    width: 593px;
  }
`

const StyledHistoryDiv = styled.div`
  margin-top: 5em;
  font-size: 0.8em;
`

const StyledImage = styled(Image)`
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
  @media screen and (min-width: 300px) {
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    width: 367px;
    float: right;
  }
`

const StyledAnker = styled.a`
  color: #4a4a4a;
  &:hover {
    color: #a2c4c7;
  }
`

const Profile = () => (
  <StyledSection id="profile">
    <Headline>| PROFILE</Headline>
    <div className="columns">
      <StyledDiv className="column">
        <InViewMonitor classNameNotInView="is-invisible" classNameInView="animated slideInUp">
          <StyledParagraph>
            <p>1993年2月20日生まれ。広島出身。</p>
            <p>
              バンド活動を通じてクリエイターに興味を持つ。音楽以外でも自分で構造やスキームを設計し作ることに喜びを見出し、社会人へ。
            </p>
            <p>
              1年目でアイデアソンからの事業化で挫折し、ECサイト運営を担当。プライベートでの勉強をきっかけに2年目からプログラマーに転向。
            </p>
            <p>
              年間3,500億円以上の受注・在庫連携を扱うECプラットフォーム上で、システム設計の上流から実装・運用の下流まで幅広く実践と経験を積む。
            </p>
            <p>
              プログラムでもビジネススキームでも美しい構造にフェチる。自分で創れるようになるべくして行動中。何かと夢中になる事が多く、マイペースとよく言われる。
            </p>
            <StyledHistoryDiv>
              <p>
                <b>2011~2014 Add (Ba.)</b>
              </p>
              <p>
                <b>
                  2013~
                  <StyledAnker href="http://usagibunnyboy.com/" target="_blank">
                    usagibunnyboy(ウサギバニーボーイ)
                  </StyledAnker>
                  (Ba.)
                </b>
              </p>
              <p>
                <b>
                  2015~
                  <StyledAnker href="http://hamee.co.jp/" target="_blank">
                    Hamee inc
                  </StyledAnker>
                  , EC shop marketing → Programer
                </b>
              </p>
            </StyledHistoryDiv>
          </StyledParagraph>
        </InViewMonitor>
      </StyledDiv>
      <div className="column">
        <InViewMonitor classNameNotInView="is-invisible" classNameInView="animated slideInRight">
          <StyledImage src={Icon} />
        </InViewMonitor>
      </div>
    </div>
  </StyledSection>
)

export default Profile
