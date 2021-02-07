import React from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { SeriesForm } from './NewSeries'

export const NewFirstSeason = ({
                            serieses,
                            setSerieses,
                            price,
                            distribution,
                            presaleDuration,
                            minCap
                          }) => {
  return (
    <div>
      <Segment>
        <Header as="h3"> Token Presale Parameters </Header>
        <Form.Field>
          <label> Price(per ETH) </label>
          <input
            type="number"
            placeholder="1000"
            {...price}
          />
        </Form.Field>
        <Form.Field>
          <label> Distribution for Project(%) </label>
          <input
            type="number"
            placeholder="30"
            {...distribution}
          />
        </Form.Field>
        <Form.Field>
          <label> Duration(days) </label>
          <input
            type="number"
            placeholder="14"
            {...presaleDuration}
          />
        </Form.Field>
        <Form.Field>
          <label> Minimal Required Capitalization </label>
          <input
            type="number"
            placeholder="100000"
            {...minCap}
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