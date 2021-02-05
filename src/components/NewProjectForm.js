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

// TODO Add additional explanation for each field
const NewProjectForm = () => {
  const { web3, account } = useWallet()

  const { input: name } = useInput("Hate Google")
  const { input: token } = useInput("Hate Google")
  const { input: symbol } = useInput("Hate Google")

  const { input: decimals } = useInput(18)
  const { input: price } = useInput("100000000000000000000")
  const { input: distribution } = useInput(20)
  const { input: presaleDuration } = useInput(100)

  const [serieses, setSerieses] = useState([{
    Duration: 100,
    StakeUnlock: 25,
    Vote: {
      Duration: 100,
      Filters: [{
        Schema: 2,
        Value: 50,
      }]
    }
  }])

  const onSubmit = async () => {
    const project = {
      ProjectName: name.value,
      TokenName: token.value,
      TokenSymbol: symbol.value,
      TokenDecimal: decimals.value,
      FirstSeason: {
        Presale: {
          TokenPrice: price.value,
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

    const res = await newProject(web3, account, project)
    console.log(res)
  }

  return (
    <Form onSubmit={onSubmit}>
      {!web3 ? (
        <Segment placeholder>
          <Header icon>
            <Icon name="ethereum" />
            Connect to your Ethereum wallet first!
          </Header>
        </Segment>
      ) : (
          <>
            <Header as="h2"> Сreate Project </Header>
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
                <Header as="h3"> Configure Initial Season </Header>
                <Segment>
                  {serieses.map((series, i) => (
                    <SeriesForm key={i} series={series} setSeries={series => setSerieses([...serieses.slice(0, i), series, ...serieses.slice(i + 1)])} />
                  ))}
                  <Button type="button" onClick={() => setSerieses(serieses => [...serieses, { ...serieses[0] }])}>
                    Add Series
                  </Button>
                </Segment>
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
    <>
      <Header as="h4"> Configure Series </Header>
      <Segment>
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
    </>
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
