import React from 'react'

const Paragraph = props => {
  const getComponent = text =>
    text.split('<br>').map((paragraph, index) => <p key={index}>{paragraph}</p>)

  return <dd>{getComponent(props.text)}</dd>
}

export default Paragraph
