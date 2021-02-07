import { Button, Form, Header, Segment } from 'semantic-ui-react'
import React from 'react'

export const SeriesForm = ({ series, number, setSeries }) => {
  const onChange = (e, { name, value }) => setSeries({ ...series, [name]: value })
  const onChangeVoteFilter = (e, { name, value }) => setSeries({
    ...series,
    Vote: {
      ...series.Vote,
      Filters: [{
        ...series.Vote.Filters[0],
        [name]: value
      }]
    }
  })

  return (
    <Segment clearing>
      <Header as="h4" floated="left"> Series {number} </Header>
      <Button type="button" size="mini" color="red" circular icon="cancel" floated="right" onClick={() => setSeries()} />
      <Form.Field required>
        <label> Duration(weeks) </label>
        <Form.Input
          type="number"
          name="Duration"
          placeholder="4"
          value={series.Duration}
          onChange={onChange}
        />
      </Form.Field>
      <Form.Field required>
        <label> Portion(%) </label>
        <Form.Input
          type="number"
          name="StakeUnlock"
          placeholder="4"
          value={series.StakeUnlock}
          onChange={onChange}
        />
      </Form.Field>
      <Form.Field required>
        <label> Vote Duration(days) </label>
        <Form.Input
          type="number"
          name="VoteDuration"
          placeholder={series.Vote.Duration}
          value={series.Vote.Duration}
          onChange={(e, { value }) => setSeries({
            ...series,
            Vote: {
              ...series.Vote,
              Duration: value
            }
          })
          }
        />
      </Form.Field>
      <Form.Select
        required
        fluid
        label='Vote Schema'
        placeholder={series.Vote.Filters[0].Schema.toString()}
        value={series.Vote.Filters[0].Schema}
        name='Schema'
        options={[
          {
            key: 1,
            text: 'Percent of Absolute',
            value: 1,
          },
          {
            key: 2,
            text: 'Percent of Participant',
            value: 2,
          },
          {
            key: 3,
            text: 'Difference of Votes',
            value: 4,
          },
        ]}
        onChange={onChangeVoteFilter}
      />
      <Form.Field required>
        <label> Vote Filter Value(%) </label>
        <Form.Input
          type="number"
          name="Value"
          placeholder={series.Vote.Filters[0].Value}
          value={series.Vote.Filters[0].Value}
          onChange={onChangeVoteFilter}
        />
      </Form.Field>
    </Segment>
  )
}