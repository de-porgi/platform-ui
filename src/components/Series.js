import React from 'react'
import { Grid, Item } from 'semantic-ui-react'
import { getVoting } from '../hooks'
import { useWallet } from '../wallet'

const Series = ({ number, series }) => {
  const { web3 } = useWallet()


  return (
    <Item.Group>
      <Item>
        <Item.Content>
          <Item.Header>Series {number + 1}</Item.Header>
          <Item.Description>
            <Grid columns={4} divided>
              <Grid.Row>
                <Grid.Column>
                  <p>Start: {series.Start}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Duration: {series.Duration}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Stake Unlock: {series.StakeUnlock}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Vote: {series.Vote}</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default Series
