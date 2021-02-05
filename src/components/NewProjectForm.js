import React, { useState } from 'react'
import {
  Form,
  Button,
  Header,
  Segment,
  Icon
} from 'semantic-ui-react'

import { useWallet } from '../wallet'
import { newProject } from '../hooks'
import { toWei } from 'web3-utils'
import { useHistory } from 'react-router-dom'

// TODO Add additional explanation for each field
const NewProjectForm = () => {
  const { web3 } = useWallet()
  const history = useHistory()

  const { input: name } = useInput("Hate Google")
  const { input: token } = useInput("Hate Google")
  const { input: symbol } = useInput("Hate Google")

  const { input: decimals } = useInput(18)
  const { input: price } = useInput("1")
  const { input: distribution } = useInput(20)
  const { input: presaleDuration } = useInput(100)

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

  const onSubmit = async () => {
    const project = {
      ProjectName: name.value,
      TokenName: token.value,
      TokenSymbol: symbol.value,
      TokenDecimal: decimals.value,
      FirstSeason: {
        Presale: {
          TokenPrice: toWei(price.value),
          OwnerTokensPercent: distribution.value,
          Duration: presaleDuration.value,
        },
        Series: serieses,
      },
      NextSeasons: [{
        Presale: {
          TokensEmissionPercent: 50,
          Emissions: 2,
          OwnerTokensPercent: 10,
          TimeBetweenEmissions: 100,
        },
        Series: serieses,
      }],
    }

    setLoading(true)
    await newProject(web3, project)
    history.push("/")
  }

  return (
    <Form onSubmit={onSubmit}>
      {!web3 || loading ? (
        <Segment placeholder loading={loading}>
          {!web3 ? (
            <Header icon>
              <Icon name="ethereum" />
              Connect to your Ethereum wallet first!
            </Header>
          ) : <></>}

        </Segment>
      ) : (
          <>
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
              </Segment>
              <Segment>
                <Header as="h3"> Configure Initial Season </Header>
                <Segment.Group>
                  {serieses.map((series, i) => (
                    <SeriesForm key={i} series={series} setSeries={series => {
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
          </>
        )}
    </Form>
  )
}

const SeriesForm = ({ series, setSeries }) => {
  const onChange = (e, { name, value }) => setSeries({ ...series, [name]: value })

  return (
    <Segment clearing>
      <Header as="h4" floated="left"> Series </Header>
      <Button type="button" size="mini" color="red" circular icon="cancel" floated="right" onClick={() => setSeries()} />
      <Form.Field>
        <label> Duration(weeks) </label>
        <Form.Input
          type="number"
          name="Duration"
          placeholder="4"
          value={series.Duration}
          onChange={onChange}
        />
      </Form.Field>
      <Form.Field>
        <label> Portion(%) </label>
        <Form.Input
          type="number"
          name="StakeUnlock"
          placeholder="4"
          value={series.StakeUnlock}
          onChange={onChange}
        />
      </Form.Field>

      {/* // TODO Add voting
      <Form.Field>
        <label> Portion(%) </label>
        <input
          type="number"
          placeholder="4"
          {...portion}
        />
      </Form.Field> */}
    </Segment>
  )
}

const useInput = init => {
  const [value, setValue] = useState(init);

  return {
    setValue,
    reset: () => setValue(""),
    input: {
      value,
      onChange: e => {
        e.preventDefault()
        setValue(e.target.value);
      }
    }
  };
};

export default NewProjectForm
