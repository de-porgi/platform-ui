import React from 'react'
import { Grid, Item } from 'semantic-ui-react'

const Series = (props) => {
  return (
    <Item.Group>
      <Item>
        <Item.Content>
          <Item.Header>Series1</Item.Header>
          <Item.Description>
            <Grid columns={4} divided>
              <Grid.Row>
                <Grid.Column>
                  <p>Start: {props.series && props.series.Start  || '-'}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Duration: {props.series && props.series.Duration || '-'}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Stake Unlock: {props.series && props.series.StakeUnlock || '-'}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Vote: {props.series && props.series.Vote || '-'}</p>
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
