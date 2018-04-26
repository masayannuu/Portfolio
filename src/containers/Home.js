import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'
import WorkContent from '../components/molecules/Content/WorkContent'

const tags = ['Ruby', 'Js', 'java', 'C#']
const info_tags = [{ name: 'Language', tags }, { name: 'SoftWare', tags }]
export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <WorkContent
      heading="File Transfer Application"
      sub_heading="ファイル転送サービス"
      info_tags={info_tags}
    />
    <img src={logoImg} alt="" />
  </div>
))
