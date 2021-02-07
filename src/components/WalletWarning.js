import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'

export default () => (
  <Segment placeholder>
    <Header icon>
      <Icon name="ethereum" />
        Connect to your Ethereum wallet first!
      </Header>
  </Segment>
)