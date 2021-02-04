import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'

const Series = () => {
  const [start] = useState('0')
  const [duration] = useState('0')
  const [stakeUnlock] = useState('0')
  const [vote] = useState('Voting')
  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <p>Start: {start}</p>
        </Grid.Column>
        <Grid.Column>
          <p>Duration: {duration}</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <p>Stake Unlock: {stakeUnlock}</p>
        </Grid.Column>
        <Grid.Column>
          <p>Vote: {vote}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Series
