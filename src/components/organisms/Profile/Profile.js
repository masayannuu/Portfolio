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
  font-size: 1rem;
`

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
`

const StyledHistoryDiv = styled.div`
  margin-top: 5em;
  font-size: 0.9rem;
`

const StyledImage = styled(Image)`
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) {
    width: 367px;
    float: right;
  }
  @media screen and (min-width: 1408px) {
    width: 50%;
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
        <InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated slideInUp">
          <StyledParagraph>
            <p>1993年2月20日生まれ。広島出身。</p>
            <p>
              バンド活動を通じてクリエイターに興味を持つ。音楽以外でも自分で構造やスキームを設計し作ることに喜びを見出し、社会人へ。
            </p>
            <p>
              新卒1年目でアイデアソンからの事業化で挫折し、ECサイト運営を担当。事業化挫折を発端に2年目からプログラマーへ転向。
            </p>
            <p>
              年間3,500億円以上の受注・在庫連携を扱うECプラットフォーム上で、ラッキーなことにシステム設計の上流から実装・運用の下流まで幅広く実践と経験を積む。
            </p>
            <p>
              2018年から社長直下の新規事業開発に参画し、IoT製品を開発しリリース。反省点が多かったPJ体制をきっかけにIssue駆動や仮説・検証の大事さを説く。開発体制を変えるべく、サーバTのリーダーとして新規開発中。
            </p>
            <p>
              プログラムでもビジネススキームでも美しい構造にフェチる。自分で創れるようになるべくして行動中。何かと夢中になる事が多く、マイペースとよく言われる。
            </p>
            <StyledHistoryDiv>
              <p>
                <b>2011~2015: add (Ba.)</b>
              </p>
              <p>
                <b>
                  2013~2015
                  <StyledAnker href="http://usagibunnyboy.com/" target="_blank">
                    : usagibunnyboy(ウサギバニーボーイ)
                  </StyledAnker>
                  (Ba.)
                </b>
              </p>
              <p>
                <b>
                  2015~
                  <StyledAnker href="http://hamee.co.jp/" target="_blank">
                    : Hamee inc
                  </StyledAnker>
                  , EC marketing → ECプラットフォーム Programer
                </b>
              </p>
              <p>
                <b>
                  2018~
                  <StyledAnker href="http://hamee.co.jp/" target="_blank">
                    : Hamee inc
                  </StyledAnker>
                  , IoT部 Programer
                </b>
              </p>
            </StyledHistoryDiv>
          </StyledParagraph>
        </InViewMonitor>
      </StyledDiv>
      <div className="column">
        <InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated slideInRight">
          <StyledImage src={Icon} />
        </InViewMonitor>
      </div>
    </div>
  </StyledSection>
)

export default Profile
