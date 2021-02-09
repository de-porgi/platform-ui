import React, { useState } from 'react'
import {
  Form,
  Button,
  Header,
  Segment,
  Message
} from 'semantic-ui-react'

import WalletWarning from './WalletWarning'
import { useWallet } from '../wallet'
import { newProject, useInput } from '../hooks'
import { toWei } from 'web3-utils'
import { useHistory } from 'react-router-dom'

// TODO Add additional explanation for each field
const NewProjectForm = () => {
  const { web3 } = useWallet()
  const history = useHistory()

  const { input: name } = useInput("PORGI")
  const { input: token } = useInput("PORGI TKN")
  const { input: symbol } = useInput("PRG")

  const { input: decimals } = useInput(18)
  const { input: price } = useInput("1")
  const { input: distribution } = useInput(20)
  const { input: presaleDuration } = useInput(100)
  const { input: minCap } = useInput(10000000000)

  const [serieses, setSerieses] = useState([
    {
      Duration: 100,
      StakeUnlock: 30,
      Vote: {
        Duration: 100,
        Filters: [{
          Schema: 2,
          Value: 50,
        }]
      }
    },
    {
      Duration: 100,
      StakeUnlock: 70,
      Vote: {
        Duration: 100,
        Filters: [{
          Schema: 2,
          Value: 50,
        }]
      }
    },
  ])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const onSubmit = async () => {
    let fullStakeUnlock = 0
    serieses.forEach(s => {
      fullStakeUnlock += Number(s.StakeUnlock)
    })

    if (fullStakeUnlock < 100) {
      alert("Error: Sum of Series Portion(%) less then 100%")
      return
    }

    if (fullStakeUnlock > 100) {
      alert("Error: Sum of Series Portion(%) bigger then 100%")
      return
    }

    // serieses.forEach(s => {
    //   s.Duration *= 7 * 24 * 60 * 60 // weeks to sec
    //   s.Vote.Duration *= 24 * 60 * 60 // days to sec
    // })

    const project = {
      ProjectName: name.value,
      TokenName: token.value,
      TokenSymbol: symbol.value,
      TokenDecimal: decimals.value,
      FirstSeason: {
        Presale: {
          TokenPrice: toWei(price.value),
          OwnerTokensPercent: distribution.value,
          Duration: presaleDuration.value, // * 24 * 60 * 60, // days to sec
          MinCap: minCap.value
        },
        Series: serieses,
      }
    }

    setLoading(true)
    try {
      await newProject(web3, project)
    } catch (e) {
      setLoading(false)
      setError(e.message)
      return
    }

    history.push("/")
  }

  if (!web3) {
    return <WalletWarning />
  }

  if (error) {
    return (
      <Message error
        header="Failed to create new project. Please retry!"
        list={[error]}
      />
    )
  }

  // TODO Loading have to be handled by upper component
  if (loading) {
    return <Segment placeholder loading />
  }

  return (
    <Form onSubmit={onSubmit}>
      <Segment.Group>
        <Segment>
          <Header as="h3"> Configure Project Info </Header>
          <Form.Field>
            <label> Project Name </label>
            <input
              placeholder="e.g. Hate Google"
              {...name}
            />
          </Form.Field>
          <Form.Field>
            <label> Token Name </label>
            <input
              placeholder="e.g. Hate Facebook"
              {...token}
            />
          </Form.Field>
          <Form.Field>
            <label> Token Symbol </label>
            <input
              placeholder="e.g. Hate Apple"
              maxLength="4"
              {...symbol}
            />
          </Form.Field>
          <Form.Field>
            <label> Token Decimals </label>
            <input
              type="number"
              placeholder="42"
              {...decimals}
            />
          </Form.Field>
        </Segment>
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
              <SeriesForm key={i} number={i + 1} series={series} setSeries={series => {
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
        <Segment>
          <Form.Button fluid primary size="large">
            Submit
            </Form.Button>
        </Segment>
      </Segment.Group>
    </Form>
  )
}

const SeriesForm = ({ series, number, setSeries }) => {
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

export default NewProjectForm
