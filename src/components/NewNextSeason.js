import React from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { SeriesForm } from './NewSeries'

export const NewNextSeason = ({
                                serieses,
                                setSerieses,
                                tokensEmissionPercent,
                                emissions,
                                ownerTokensPercent,
                                timeBetweenEmissions
}) => {
  return (
    <div>
      <Segment>
        <Header as="h3"> Tokens Emission Percent </Header>
        <Form.Field>
          <label> Tokens Emission Percent </label>
          <input
            type="number"
            placeholder="1000"
            name={'TokensEmissionPercent'}
            {...tokensEmissionPercent}
          />
        </Form.Field>
        <Form.Field>
          <label> Emissions </label>
          <input
            type="number"
            placeholder="30"
            name={'Emissions'}
            {...emissions}
          />
        </Form.Field>
        <Form.Field>
          <label> Owner Tokens Percent </label>
          <input
            type="number"
            placeholder="14"
            name={'OwnerTokensPercent'}
            {...ownerTokensPercent}
          />
        </Form.Field>
        <Form.Field>
          <label> Time Between Emissions </label>
          <input
            type="number"
            placeholder="100000"
            name={'TimeBetweenEmissions'}
            {...timeBetweenEmissions}
          />
        </Form.Field>
      </Segment>
      <Segment>
        <Header as="h3"> Configure Initial Season </Header>
        <Segment.Group>
          {serieses.map((series, i) => (
            <SeriesForm key={i} number={i+1} series={series} setSeries={series => {
              if (series) {
                setSerieses([
                  ...serieses.slice(0, i),
                  series,
                  ...serieses.slice(i + 1)
                ])
              } else {
                setSerieses([
                  ...serieses.slice(0, i),
                  ...serieses.slice(i + 1)
                ])
              }
            }} />
          ))}
          <Segment textAlign="center">
            <Button type="button" circular icon="plus" color="green" onClick={() => setSerieses(serieses => [...serieses, { ...serieses[0] }])} />
          </Segment>
        </Segment.Group>
      </Segment>
    </div>
  )
}