import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import Series from './Series'

const Season = (props) => {
  return (
    <div>
      {props.season.ActiveSeries > -1 &&
        <Header as="h4" color={"green"} textAlign={"center"}>Active</Header>
      }

      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <b>Start</b>: {props.season.Presale.Start}
          </Grid.Column>
          <Grid.Column>
            <b>Duration</b>: {props.season.Presale.Duration}
          </Grid.Column>
          <Grid.Column>
            <b>Owner Percent</b>: {props.season.Presale.OwnerPercent}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <b>Price</b>: {props.season.Presale.Price}
          </Grid.Column>
          <Grid.Column>
            <b>Minimum Capacity</b>: {props.season.Presale.MinCap}
          </Grid.Column>
          <Grid.Column>
            <b>Total Generated</b>: {props.season.Presale.TotalGenerated}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {props.season.ActiveSeries > -1 &&
        <Header as="h4" dividing>Series</Header> ||
        <Header
          as="h4"
          color={"brown"}
          textAlign={"center"}
        >
          There are no series yet
        </Header>
      }

      {props.season.ActiveSeries > -1 && props.season.Series.map((series, i) => (
        <Series key={i} number={i+1} series={series} />
      ))}
    </div>
  )
}

export default Season
