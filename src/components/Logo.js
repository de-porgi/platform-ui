import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const UnpaddedHeaderContent = styled(Header.Content)`
  padding-left: 0 !important;
`

export default () => (
  <Header size="huge" floated="left" color="blue">
    <Icon name="product hunt" />
    <UnpaddedHeaderContent>
      ORGI Fundraising
    </UnpaddedHeaderContent>
  </Header>
)