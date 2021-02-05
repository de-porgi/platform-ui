import React, { useState } from 'react'
import { Accordion, Container, Icon } from 'semantic-ui-react'
import Series from './Series'

const Season = () => {
  const [activeSeries] = useState(0)
  const stakePercentsLeft = 0
  const [activeIndex, setActiveIndex] = useState(activeSeries)
  function handleClick(e, titleProps) {
    const { index } = titleProps
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <Container>
      <p>Stake Percents Left: {stakePercentsLeft}</p>

      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Series1
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Series />
        </Accordion.Content>
      </Accordion>
    </Container>
  )
}

export default Season
